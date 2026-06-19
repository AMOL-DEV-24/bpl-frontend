/* =========================================================
   REGISTRATION TYPES
   Purpose : Shared form values type used across all
             registration sub-components.
   ========================================================= */
export interface RegistrationValues {
  photo:        File | null;
  firstName:    string;
  lastName:     string;
  email:        string;
  mobile:       string;
  village:      string;
  age:          string;
  jerseyNumber: string;
  role:         string;
  battingStyle: string;
  bowlingStyle: string;
  experience:   string;
  matches:      string;
  runs:         string;
  wickets:      string;
  strikeRate:   string;
  about:        string;
}