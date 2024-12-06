import React from 'react';
import DisabledAttempt from './DisabledAttempt';
import EnabledAttempt from './EnabledAttempt';
import Form from './Form';
import { useState, useEffect } from 'react';
import {
  getItemFromStorageDefault,
  setUserAttemptData,
} from '../utils/storage';
import {
  getListOfCountries,
  validateUserAttempt,
} from '../utils/misc';
import { fetchCountryByName } from '../api/country';
import { formatContinentText } from '../utils/formatting';

type PlayViewProps = {
  solution: {
    country: string
    continent: string
    language: string
  }
}

export const PlayView: React.FC<PlayViewProps> = ({ solution }) => {
  const [countries, setCountries] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [currentAttempt, setCurrentAttempt] = useState(
    getItemFromStorageDefault(0, 'currentAttempt')
  );
  const [guessInput, setGuessInput] = useState('');
  const [attemptColors, setAttemptColors] = useState(
    getItemFromStorageDefault(
      [
        {
          countryColor: '',
          continentColor: '',
          languageColor: '',
          firstLetterColor: '',
        },
        {
          countryColor: '',
          continentColor: '',
          languageColor: '',
          firstLetterColor: '',
        },
        {
          countryColor: '',
          continentColor: '',
          languageColor: '',
          firstLetterColor: '',
        },
        {
          countryColor: '',
          continentColor: '',
          languageColor: '',
          firstLetterColor: '',
        },
        {
          countryColor: '',
          continentColor: '',
          languageColor: '',
          firstLetterColor: '',
        },
        {
          countryColor: '',
          continentColor: '',
          languageColor: '',
          firstLetterColor: '',
        },
      ],
      'attemptColors'
    )
  );

  const [attempts, setAttempts] = useState(
    getItemFromStorageDefault(
      [
        {
          countryAttempted: '',
          continent: '',
          language: '',
          firstLetter: '',
          id: 0,
        },
        {
          countryAttempted: '',
          continent: '',
          language: '',
          firstLetter: '',
          id: 1,
        },
        {
          countryAttempted: '',
          continent: '',
          language: '',
          firstLetter: '',
          id: 2,
        },
        {
          countryAttempted: '',
          continent: '',
          language: '',
          firstLetter: '',
          id: 3,
        },
        {
          countryAttempted: '',
          continent: '',
          language: '',
          firstLetter: '',
          id: 4,
        },
        {
          countryAttempted: '',
          continent: '',
          language: '',
          firstLetter: '',
          id: 5,
        },
      ],
      'attempts'
    )
  );

  useEffect(() => {
    setUserAttemptData(
      attempts,
      attemptColors,
      currentAttempt
    );
    Array(getListOfCountries());
  }, [attempts, currentAttempt, attemptColors]);

  const updateAttemptComponent = async (e) => {
    e.preventDefault();
    // Checks if the user still has a turn
    if (currentAttempt < 6) {
      // Fetch data on user entered country
      const countryResponse =
        await fetchCountryByName(guessInput);
      const userAttemptContinent = formatContinentText(
        countryResponse[0].continents
      );
      const userAttemptLanguage = Object.values(
        countryResponse[0].languages
      )[0];

      if (
        JSON.stringify(guessInput.toLowerCase()) !==
        solution.country.toLowerCase()
      ) {
        // fetches the data for the inputed country
        let updatedAttempts = [...attempts];

        // Sets color of country section to red since its incorrect
        attemptColors[currentAttempt].countryColor =
          '#DC143C';

        // Validates Continent
        validateUserAttempt(
          userAttemptContinent,
          solution.continent,
          currentAttempt,
          attemptColors,
          'continentColor'
        );

        // Validates Language
        validateUserAttempt(
          userAttemptLanguage,
          solution.language,
          currentAttempt,
          attemptColors,
          'languageColor'
        );

        // Validate First Letter
        validateUserAttempt(
          guessInput.charAt(0),
          solution.country.charAt(0),
          currentAttempt,
          attemptColors,
          'firstLetterColor'
        );

        //updates the attempts state
        updatedAttempts[currentAttempt] = {
          countryAttempted: guessInput,
          continent: userAttemptContinent,
          language: userAttemptLanguage,
          firstLetter: guessInput.charAt(0),
          id: currentAttempt,
        };
        setAttempts(updatedAttempts);
        setAttemptColors(attemptColors);
        //updates the state of currentAttempt
        setCurrentAttempt(currentAttempt + 1);
      } else {
        //Display the result of the user if their attempt was correct
        let updatedAttempts = [...attempts];
        let updatedAttemptColors = [...attemptColors];
        updatedAttemptColors[currentAttempt] = {
          countryColor: '#50C878',
          continentColor: '#50C878',
          languageColor: '#50C878',
          firstLetterColor: '#50C878',
        };
        updatedAttempts[currentAttempt] = solution;
        setAttempts(updatedAttempts);
        setAttemptColors(updatedAttemptColors);
        setIsDisabled(true);
        setCurrentAttempt(6);
      }
    }
    //Rests the Text Field
    e.target.value = '';
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {attempts.map((attempt) => {
        if (
          attempt.countryAttempted &&
          attempt.continent &&
          attempt.language
        ) {
          return (
            <EnabledAttempt
              key={attempt.id}
              attemptData={attempt}
              attemptColors={attemptColors[attempt.id]}
            />
          );
        } else {
          return <DisabledAttempt key={attempt.id} />;
        }
      })}
      <Form
        countries={countries}
        onClickAction={updateAttemptComponent}
      />
    </div>
  );
};
