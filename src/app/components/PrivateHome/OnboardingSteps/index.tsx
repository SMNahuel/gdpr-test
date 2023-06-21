"use client";

import { useState, useEffect } from "react";
import { get, ref, update } from "firebase/database";
// import {
//   UNDERSTAND_GDPR,
//   ADD_COMPANY_INFO,
//   DOCUMENTS,
// } from "config/router/paths";
// import { useAuthContext } from "contexts/AuthContext";
// import { db } from "firebaseConfig";
import OnboardingStepsView from "./OnboardingStepsView";

export default function OnboardingSteps() {
  //   const { currentUser } = useAuthContext();

  const [companyInfoCompleted, setCompanyInfoCompleted] = useState(false);
  const [tutorialCompleted, setTutorialCompleted] = useState(false);
  const [error, setError] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const steps = [
    {
      label: "Add company",
      description:
        "Let's link your League of Legends account and see what you can learn about yourself",
      cta: "Add info",
      //   linkTo: ADD_COMPANY_INFO,
      completed: companyInfoCompleted,
    },
    {
      label: "Understand GDPR",
      description:
        "You will see a quick tutorial about what your company needs.",
      cta: "Learn the basics",
      //   linkTo: UNDERSTAND_GDPR,
      completed: tutorialCompleted,
    },
    {
      label: "Well done!",
      description:
        "Finally, check out the results and let's see what you can learn about yourself.",
      cta: `Let's see those documents`,
      //   linkTo: DOCUMENTS,
      completed: false,
    },
  ];

  // useEffect(function () {
  //   function saveUserData() {
  //     try {
  //       setLoading(true);
  //       update(ref(db, `/${currentUser.uid}`), {
  //         user: currentUser.providerData[0],
  //       });
  //     } catch (error) {
  //       setError("Could not save user data");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   saveUserData();
  // });

  //   useEffect(
  //     function () {
  //       async function fetchData() {
  //         try {
  //           setLoading(true);
  //           const companyIdRef = ref(
  //             db,
  //             `/${currentUser.uid}/company/companyIdNumber`
  //           );
  //           const companyIdSnapshot = await get(companyIdRef);
  //           const tutorialCompleteRef = ref(
  //             db,
  //             `/${currentUser.uid}/tutorialComplete`
  //           );
  //           const tutorialCompleteSnapshot = await get(tutorialCompleteRef);
  //           if (tutorialCompleteSnapshot.exists()) {
  //             setTutorialCompleted(true);
  //             setActiveStep(2);
  //             openSnackbar(true);
  //           } else if (companyIdSnapshot.exists()) {
  //             setCompanyInfoCompleted(true);
  //             setActiveStep(1);
  //           }
  //         } catch (error) {
  //           setError(
  //             "Could not fetch information about LOL account from the database"
  //           );
  //         } finally {
  //           setLoading(false);
  //         }
  //       }
  //       fetchData();
  //     },
  //     [currentUser.uid, openSnackbar]
  //   );

  // const handleSnackbarClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   openSnackbar(false);
  // };

  return (
    <OnboardingStepsView
      //   currentUser={currentUser}
      // error={error}
      steps={steps}
      activeStep={activeStep}
      loading={loading}
      openSnackbar={openSnackbar}
      // handleSnackbarClose={handleSnackbarClose}
      // setOpenSnackbar={setOpenSnackbar}
    />
  );
}
