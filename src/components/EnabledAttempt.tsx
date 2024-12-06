import React from 'react';

type EnabledAttemptProps = {
  attemptData: {
    countryAttempted: string;
    continent: string;
    language: string;
    firstLetter: string;
  };
  attemptColors: {
    countryColor: string;
    continentColor: string;
    languageColor: string;
    firstLetterColor: string;
  };
};

export const EnabledAttempt: React.FC<
  EnabledAttemptProps
> = ({ attemptData, attemptColors }) => {
  return (
    <div className="mt-2.5 flex h-10 w-full">
      <div
        className="country-attempted country-content"
        style={{
          backgroundColor: attemptColors.countryColor,
        }}
      >
        <p
          style={{
            backgroundColor: attemptColors.countryColor,
          }}
        >
          {attemptData.countryAttempted}
        </p>
      </div>
      <div
        className="continent country-content"
        style={{
          backgroundColor: attemptColors.continentColor,
        }}
      >
        <p
          style={{
            backgroundColor: attemptColors.continentColor,
          }}
        >
          {attemptData.continent}
        </p>
      </div>
      <div
        className="language country-content"
        style={{
          backgroundColor: attemptColors.languageColor,
        }}
      >
        <p
          style={{
            backgroundColor: attemptColors.languageColor,
          }}
        >
          {attemptData.language}
        </p>
      </div>
      <div
        className="firstLetter country-content"
        style={{
          backgroundColor: attemptColors.firstLetterColor,
        }}
      >
        <p
          style={{
            backgroundColor: attemptColors.firstLetterColor,
          }}
        >
          {attemptData.firstLetter}
        </p>
      </div>
    </div>
  );
};

export default EnabledAttempt;
