/* eslint jsx-a11y/label-has-for: 0 */
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import qs from 'qs';
import moment from 'moment';
import { DESKTOP_MIN_WIDTH, MEDIA_QUERY_DESKTOP, FONT_SPACE_MONO } from '../../constants/Css';
import DatePicker from '../DatePicker/DatePicker';
import { GetDestinations, GetUrl } from '../../services/WebsiteServices';
import { GetCurrentLocale } from '../../services/LocaleServices';

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: no-wrap;

  ${MEDIA_QUERY_DESKTOP} {
    flex-direction: row;
  }
`;

const DropdownSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid #000;
  padding: 11px;
  margin-bottom: 15px;
  cursor: pointer;
  text-overflow: ellipsis;
  position: relative;
  background-color: white;
  color: black;
  font-weight: normal;

  ${MEDIA_QUERY_DESKTOP} {
    margin-bottom: 0;
    border: 2px solid #000;
  }
`;

const Label = styled.label`
  font-size: 16px;
  line-height: 24px;
`;

const DropdownVisor = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 46px;
  left: -1px;
  right: -1px;
  border: 1px solid #000;
  background-color: #fff;
  font-size: 16px;
  line-height: 24px;
  padding: 15px;
  z-index: 1;
  display: none;

  ${props =>
    props.active &&
    css`
      display: block;
    `};

  ${MEDIA_QUERY_DESKTOP} {
    border: 2px solid #000;
    left: -2px;
    right: -2px;
  }
`;

const DestinationDropdownMenu = styled(DropdownMenu)`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    column-count: 2;
    text-align: left;

    li:hover {
      color: #999;
    }
  }
`;

const GuestsContainer = styled.div`
  border: 1px solid #000;
  padding: 11px;
  margin-bottom: 15px;
  text-overflow: ellipsis;
  position: relative;
  background-color: white;
  color: black;
  font-weight: normal;
  width: 200px;
  line-height: 24px;

  ${MEDIA_QUERY_DESKTOP} {
    margin-bottom: 0;
    border: 2px solid #000;
    border-left: none;
  }
`;

const BedroomsDropdownMenu = styled(DropdownMenu)`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: left;
    column-count: 2;

    li {
      color: #aaa;

      label {
        cursor: pointer;
      }
    }

    li:hover {
      color: #000;
    }
  }
`;

const SearchButton = styled.button`
  width: 100%;
  border: 1px solid #000;
  background-color: #59a7fc;
  padding: 11px;
  text-transform: uppercase;
  font-family: ${FONT_SPACE_MONO};
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 4.35px;
  font-style: italic;
  font-weight: bold;
  cursor: pointer;
  outline: 0;
  margin: 0;

  ${MEDIA_QUERY_DESKTOP} {
    width: 156px;
    border: 2px solid #000;
    border-left: none;
  }
`;

const Arrow = styled.div`
  width: 8px;
  height: 8px;
  border: solid #000;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  margin: 0 2px 2px 0;
`;

const DestinationsDropdown = styled(DropdownSelect)`
  ${MEDIA_QUERY_DESKTOP} {
    border-right: none;
    width: 260px;
  }
`;

const BedroomsDropdown = styled(DropdownSelect)`
  ${MEDIA_QUERY_DESKTOP} {
    border-left: none;
    width: 200px;
  }
`;

const GuestsButton = styled.div`
  height: 31px;
  width: 31px;
  border: 2px solid #d6d6d6;
  font-size: 27px;
  line-height: 24px;
  position: absolute;
  top: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const LessGuestsButton = styled(GuestsButton)`
  left: 95px;
`;

const MoreGuestsButton = styled(GuestsButton)`
  right: 13px;
`;

const CountGuests = styled.div`
  position: absolute;
  left: 125px;
  top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
`;

const GuestsPlaceholder = styled.div`
  display: flex;
  align-items: center;
`;

const DESTINATIONS_DROPDOWN = 'destinations';
const BEDROOMS_DROPDOWN = 'bedrooms';

/**
 * @description Search Bar Component
 */
class SearchBar extends Component {
  state = {
    destinations: [],
    openedDropdown: '',
    selectedDestination: undefined,
    selectedCheckIn: undefined,
    selectedCheckOut: undefined,
    selectedBedrooms: [],
    focusedDatepickerInput: undefined,
    selectedGuests: 0,
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);

    GetDestinations(GetCurrentLocale()).then(({ data: destinations }) => {
      this.setState({ destinations });
    });
  }

  componentDidUpdate() {
    const { params, search } = this.props;

    if (params) {
      const placeWithSpaces = params.place.replace(new RegExp('-', 'g'), ' ');
      if (this.setDestinationUrl(placeWithSpaces)) {
        return; // update only 1 in this call, in the next will update the urls if it is necessary
      }
    }

    if (search) {
      const searchObj = qs.parse(search.slice(1));
      const { checkIn, checkOut, guests } = searchObj;

      if (checkIn) {
        if (this.setDatesUrl(checkIn, checkOut)) return;
      }

      if (guests) {
        this.setGuestsUrl(parseInt(guests, 10));
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  onDatesChange = ({ startDate: selectedCheckIn, endDate: selectedCheckOut }) => {
    this.setState({ selectedCheckIn, selectedCheckOut });
  };

  setDestinationUrl = urlDestination => {
    if (this.state.selectedDestination) {
      return false;
    }

    if (urlDestination && this.state.destinations) {
      for (let i = 0; i < this.state.destinations.length; i += 1) {
        if (this.state.destinations[i].title.toLowerCase() === urlDestination.toLowerCase()) {
          this.selectDestination(this.state.destinations[i]);
          return true;
        }
      }
    }

    return false;
  };

  setGuestsUrl = guests => {
    if (this.state.selectedGuests !== 0) {
      return;
    }

    this.setState({ selectedGuests: guests });
  };

  setDatesUrl = (checkIn, checkOut) => {
    if (this.state.selectedCheckIn) {
      return false;
    }
    if (this.state.selectedCheckIn === null && this.state.selectedCheckOut === null) {
      return false;
    }

    this.onDatesChange({ startDate: moment(checkIn), endDate: moment(checkOut) });
    return true;
  };

  setWrapperRef = ref => {
    this.wrapperRef = ref;
  };

  getSearchBarTranslations = () => this.props.translations || {};

  getNumberGuestsLabel = () => {
    const searchBar = this.getSearchBarTranslations();

    if (this.state.selectedGuests === 0) {
      return searchBar.number_of_guests;
    }

    return this.state.selectedGuests;
  };

  getSelectedGuestsDesktop = () => {
    if (this.state.selectedGuests === 0) {
      return 1;
    }

    return this.state.selectedGuests;
  };

  getDestinationLabel = () => {
    if (this.state.selectedDestination) {
      return this.state.selectedDestination.title;
    }

    const searchBar = this.getSearchBarTranslations();

    return searchBar.destination_placeholder ? searchBar.destination_placeholder : '';
  };

  getBedroomOptionsLabel = () => {
    const searchBar = this.getSearchBarTranslations();

    if (searchBar.bedroom_options && searchBar.bedroom_options.length === this.state.selectedBedrooms.length) {
      return searchBar.clear_all_placeholder;
    }

    return searchBar.select_all_placeholder ? searchBar.select_all_placeholder : '';
  };

  setGuests = numberOfGuests => {
    this.setState({ selectedGuests: numberOfGuests });
  };

  search = () => {
    const searchBar = this.getSearchBarTranslations();
    // valida si ingreso el destino ||  validate if I enter the destination
    if (!this.state.selectedDestination) {
      alert(searchBar.missing_destination_alert);
      return;
    }
    // validar si ingreso al check in ||  validate if I enter the check in
    if (this.state.selectedCheckIn === null && this.state.selectedCheckOut != null) {
      alert(searchBar.missing_check_in_alert);
      return;
    }

    // validar si ingreso al check out ||    //validate if I enter at check out
    else if (this.state.selectedCheckIn != null && this.state.selectedCheckOut === null) {
      alert(searchBar.missing_check_out_alert);
      return;
    }

    let listingUrl = GetUrl(`${this.state.selectedDestination.url}/search`, GetCurrentLocale());

    const checkIn = this.state.selectedCheckIn ? this.state.selectedCheckIn.format('YYYY-MM-DD') : undefined;
    const checkOut = this.state.selectedCheckOut ? this.state.selectedCheckOut.format('YYYY-MM-DD') : undefined;
    const guests = this.getSelectedGuestsDesktop();
    const selectNightsStay =
      checkIn === undefined && checkOut === undefined ? 1000 : moment(checkOut).diff(moment(checkIn), 'days');

    listingUrl += listingUrl.indexOf('?') >= 0 ? '&' : '?';
    listingUrl += qs.stringify({
      checkIn,
      checkOut,
      guests,
      minimumStayPropertys: selectNightsStay,
    });

    window.dataLayer.push({
      event: 'Search',
      destination: this.state.selectedDestination.title,
      'check in': !checkIn ? 'No selected' : checkIn,
      'check out': !checkOut ? 'No selected' : checkOut,
      eventCallback: () => {
        window.location.href = listingUrl;
      },
    });
  };

  reduceGuests = () => {
    if (this.state.selectedGuests > 1) {
      this.setState({ selectedGuests: this.state.selectedGuests - 1 });
    }
  };

  increaseGuests = () => {
    const searchBar = this.getSearchBarTranslations();
    const maxGuests = parseInt(searchBar.max_guests_option, 10);

    if (this.state.selectedGuests < maxGuests) {
      this.setState({ selectedGuests: this.state.selectedGuests + 1 });
    }
  };

  isOptionSelected = option => this.state.selectedBedrooms.indexOf(option) >= 0;

  selectDestination = selectedDestination => {
    this.setState({ selectedDestination });
    this.toggleDropdown('');
  };

  toggleBedroomOption = (event, option) => {
    if (event.target.checked) {
      this.setState(prevState => ({
        selectedBedrooms: [...prevState.selectedBedrooms, option],
      }));
    } else {
      const selectedBedrooms = [...this.state.selectedBedrooms];
      const index = selectedBedrooms.indexOf(option);
      selectedBedrooms.splice(index, 1);
      this.setState({ selectedBedrooms });
    }
  };

  toggleSelectAll = event => {
    event.preventDefault();

    const searchBar = this.getSearchBarTranslations();

    if (searchBar.bedroom_options && searchBar.bedroom_options.length === this.state.selectedBedrooms.length) {
      this.setState({ selectedBedrooms: [] });
    } else {
      this.setState({ selectedBedrooms: searchBar.bedroom_options });
    }
  };

  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.toggleDropdown('');
    }
  };

  toggleDropdown = dropdown => {
    this.setState(prevState => ({
      openedDropdown: dropdown !== prevState.openedDropdown ? dropdown : '',
    }));
  };

  createOptionsGuests = () => {
    const searchBar = this.getSearchBarTranslations();
    const guestsOptions = [];

    if (searchBar.max_guests_option) {
      const limit = parseInt(searchBar.max_guests_option, 10);

      for (let i = 1; i <= limit; i += 1) {
        guestsOptions.push(
          <li key={i} onClick={() => this.setGuests(i)}>
            <label htmlFor={`bedrooms_options_${i}`}>{i}</label>
          </li>
        );
      }
    }

    return guestsOptions;
  };

  render() {
    const searchBar = this.getSearchBarTranslations();
    const isDesktop = window.innerWidth >= DESKTOP_MIN_WIDTH;

    const guestsPlaceholder = searchBar.guests_placeholder ? searchBar.guests_placeholder : '';

    return (
      <SearchBarContainer innerRef={this.setWrapperRef}>
        <DestinationsDropdown>
          <DropdownVisor onClick={() => this.toggleDropdown(DESTINATIONS_DROPDOWN)}>
            <Label>{this.getDestinationLabel()}</Label>
            <Arrow />
          </DropdownVisor>
          <DestinationDropdownMenu active={this.state.openedDropdown === DESTINATIONS_DROPDOWN}>
            {this.state.openedDropdown === DESTINATIONS_DROPDOWN && (
              <ul>
                {this.state.destinations.map((destination, index) => (
                  <li key={index} onClick={() => this.selectDestination(destination)}>
                    {destination.title}
                  </li>
                ))}
              </ul>
            )}
          </DestinationDropdownMenu>
        </DestinationsDropdown>

        <DatePicker
          startDate={this.state.selectedCheckIn}
          endDate={this.state.selectedCheckOut}
          focusedInput={this.state.focusedDatepickerInput}
          onFocusChange={focusedDatepickerInput => this.setState({ focusedDatepickerInput })}
          onDatesChange={this.onDatesChange}
          translations={searchBar}
          numberOfMonths={this.props.numberOfMonths}
        />

        {isDesktop ? (
          <GuestsContainer>
            <GuestsPlaceholder>
              <div>{guestsPlaceholder}</div>
            </GuestsPlaceholder>
            <LessGuestsButton onClick={() => this.reduceGuests()}>-</LessGuestsButton>
            <CountGuests>
              <div>{this.getSelectedGuestsDesktop()}</div>
            </CountGuests>
            <MoreGuestsButton onClick={() => this.increaseGuests()}>+</MoreGuestsButton>
          </GuestsContainer>
        ) : (
          <BedroomsDropdown>
            <DropdownVisor onClick={() => this.toggleDropdown(BEDROOMS_DROPDOWN)}>
              <Label>{this.getNumberGuestsLabel()}</Label>
              <Arrow />
            </DropdownVisor>
            <BedroomsDropdownMenu active={this.state.openedDropdown === BEDROOMS_DROPDOWN}>
              {this.state.openedDropdown === BEDROOMS_DROPDOWN &&
                searchBar.max_guests_option && <ul>{this.createOptionsGuests()}</ul>}
            </BedroomsDropdownMenu>
          </BedroomsDropdown>
        )}
        <SearchButton onClick={() => this.search()}>{searchBar.search_button}</SearchButton>
      </SearchBarContainer>
    );
  }
}

SearchBar.propTypes = {
  translations: PropTypes.object,
  numberOfMonths: PropTypes.number,
  params: PropTypes.object,
  search: PropTypes.string,
};

export default SearchBar;
