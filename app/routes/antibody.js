const express = require('express')
const router = express.Router()

// Version 3 - Registration - Country route
router.post('/antibody/v3/action2/country', function (req, res) {
  let country = req.session.data['country']

  if (country == "England"){
    res.redirect('/antibody/v3/refer-and-triage/comfortable-doing-test')
  } else {
    res.redirect('/antibody/v3/refer-and-triage/not-available')
  }

})

// Version 3 - Teacher registration - Comfortable doing test route
router.post('/antibody/v3/action/comfortable-doing-test', function (req, res) {
  consent = req.session.data['consent'];
  let comfortableDoingTest = req.session.data['comfortable-doing-test']
  if (comfortableDoingTest == "No" || consent == "No"){
    res.redirect('/antibody/v3/refer-and-triage/not-eligible')
  } else {
    res.redirect('/antibody/v3/refer-and-triage/do-you-have-symptoms')
  }
})

// Version 3 - Teacher registration - Do you have symptoms route
router.post('/antibody/v3/action/do-you-have-symptoms', function (req, res) {
  let doYouHaveSymptoms = req.session.data['do-you-have-symptoms']

  if (doYouHaveSymptoms == "Yes"){
    res.redirect('/antibody/v3/refer-and-triage/antigen-test')
  } else {
    res.redirect('/antibody/v3/refer-and-triage/infection-serious')
  }

})


// Version 3 - Registration - immuno condition
router.post('/antibody/v3/action/immunocompromised', function (req, res) {
  let condition = req.session.data['infection-serious']

  if (condition == "Yes"){
    res.redirect('/antibody/v3/refer-and-triage/immunocompromised')
  } else {
    res.redirect('/antibody/v3/refer-and-triage/name')
  }

})

// Version 3 - Is your delivery address the same as your home address?
router.post('/antibody/v3/action/home-address-question', function (req, res) {
  var deliveryAddressAnswer = req.session.data['delivery-address-same']

  if (deliveryAddressAnswer == "Yes"){
    res.redirect('/antibody/v3/home-testing/order-summary')
  } else {
    res.redirect('/antibody/v3/home-testing/home-address')
  }

})

// Version 3 - Teacher registration - Get consent data for the Comfortable doing test route

router.post('/antibody/v3/action/consent', function (req, res) {
  let consent = "";
  consent = req.session.data['consent'];

  if (consent == "No") {
    res.redirect('/antibody/v3/refer-and-triage/not-eligible')
  } else {
    res.redirect('/antibody/v3/refer-and-triage/comfortable-doing-test')
  }
})

// Version 3 - Teacher registration - Have you had symptoms route
router.post('/antibody/v3/action/have-you-had-symptoms', function (req, res) {
  let haveYouHadSymptoms = req.session.data['have-you-had-symptoms']

  if (haveYouHadSymptoms == "Yes"){
    res.redirect('/antibody/v3/refer-and-triage/when-did-symptoms-start')
  } else {
    res.redirect('/antibody/v3/refer-and-triage/tested-positive')
  }

})

// Version 3 - Teacher registration - Mobile phone
router.post('/antibody/v3/action/mobile-number', function (req, res) {
  let mobileNumber = req.session.data['mobile-number']

  if (mobileNumber == "Yes"){
    res.redirect('/antibody/v3/refer-and-triage/postcode')
  } else {
    res.redirect('/antibody/v3/refer-and-triage/postcode')
  }

})

// Version 3 - Teacher registration - Ethnic group route
router.post('/antibody/v3/action/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/antibody/v3/refer-and-triage/ethnic-background')
  } else {
    res.redirect('/antibody/v3/refer-and-triage/working')
  }

})

// Version 3 - Teacher registration - currently working
router.post('/antibody/v3/action/working', function (req, res) {
  let inWork = req.session.data['currently-in-work']
  if (inWork == "No"){
    res.redirect('/antibody/v3/refer-and-triage/occupation')
  } else {
    res.redirect('/antibody/v3/refer-and-triage/occupation')
  }
})

// Version 3 - Teacher Registration - Tested positive route
router.post('/antibody/v3/action/tested-positive', function (req, res) {
  let testedPositive = req.session.data['tested-positive']

  if (testedPositive == "Yes"){
    res.redirect('/antibody/v3/refer-and-triage/tested-positive-date')
  } else {
    res.redirect('/antibody/v3/refer-and-triage/household')
  }

})

// Version 3 - Registration - Do you have symptoms route
router.post('/antibody/v3/action2/do-you-have-symptoms', function (req, res) {
  let doYouHaveSymptoms = req.session.data['do-you-have-symptoms']

  if (doYouHaveSymptoms == "Yes"){
    res.redirect('/antibody/v3/global-registration/get-antigen-test')
  } else {
    res.redirect('/antibody/v3/global-registration/landline-number')
  }

})

// Version 3 - Registration - Ethnic group route
router.post('/antibody/v3/action2/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/antibody/v3/refer-and-triage/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/antibody/v3/refer-and-triage/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/antibody/v3/refer-and-triage/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/antibody/v3/refer-and-triage/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/antibody/v3/refer-and-triage/ethnic-background-another')
  } else {
    res.redirect('/antibody/v3/refer-and-triage/working')
  }

})

// Version 3 - Registration - NHS number route
router.post('/antibody/v3/action2/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']

  if (nhsNumberKnown == "Yes"){
    res.redirect('/antibody/v3/global-registration/nhs-number')
  } else {
    res.redirect('/antibody/v3/global-registration/check-your-answers')
  }

})



// Version 3 - Registration - Country route
router.post('/antibody/v3/action/people-confirmed', function (req, res) {
  res.redirect('/antibody/v3/home-testing')

})



// --- VERSION 4 ---

// Version 4 - Teacher registration - Comfortable doing test route
router.post('/antibody/v4/action/comfortable-doing-test', function (req, res) {
  consent = req.session.data['consent'];
  let comfortableDoingTest = req.session.data['comfortable-doing-test']
  if (comfortableDoingTest == "No" || consent == "No"){
    res.redirect('/antibody/v4/refer-and-triage/not-eligible')
  } else {
    res.redirect('/antibody/v4/refer-and-triage/do-you-have-symptoms')
  }
})

// Version 3 - Registration - Country route
router.post('/antibody/v4/action2/country', function (req, res) {
  let country = req.session.data['country']

  if (country == "England"){
    res.redirect('/antibody/v4/refer-and-triage/name')
  } else {
    res.redirect('/antibody/v4/refer-and-triage/not-available')
  }

})

// Version 3 - Teacher registration - Do you have symptoms route
router.post('/antibody/v4/action/do-you-have-symptoms', function (req, res) {
  let doYouHaveSymptoms = req.session.data['do-you-have-symptoms']

  if (doYouHaveSymptoms == "Yes"){
    res.redirect('/antibody/v4/refer-and-triage/antigen-test')
  } else {
    res.redirect('/antibody/v4/refer-and-triage/infection-serious')
  }

})


// Version 3 - Registration - immuno condition
router.post('/antibody/v4/action/immunocompromised', function (req, res) {
  let condition = req.session.data['infection-serious']

  if (condition == "Yes"){
    res.redirect('/antibody/v4/refer-and-triage/immunocompromised')
  } else {
    res.redirect('/antibody/v4/refer-and-triage/country')
  }

})

// Version 3 - Is your delivery address the same as your home address?
router.post('/antibody/v4/action/home-address-question', function (req, res) {
  var deliveryAddressAnswer = req.session.data['delivery-address-same']

  if (deliveryAddressAnswer == "Yes"){
    res.redirect('/antibody/v4/home-testing/order-summary')
  } else {
    res.redirect('/antibody/v4/home-testing/home-address')
  }

})

// Version 3 - Teacher registration - Get consent data for the Comfortable doing test route

router.post('/antibody/v4/action/consent', function (req, res) {
  let consent = "";
  consent = req.session.data['consent'];

  if (consent == "No") {
    res.redirect('/antibody/v4/refer-and-triage/not-eligible')
  } else {
    res.redirect('/antibody/v4/refer-and-triage/comfortable-doing-test')
  }
})

// Version 3 - Teacher registration - Have you had symptoms route
router.post('/antibody/v4/action/have-you-had-symptoms', function (req, res) {
  let haveYouHadSymptoms = req.session.data['have-you-had-symptoms']

  if (haveYouHadSymptoms == "Yes"){
    res.redirect('/antibody/v4/refer-and-triage/when-did-symptoms-start')
  } else {
    res.redirect('/antibody/v4/refer-and-triage/tested-positive')
  }

})

// Version 3 - Teacher registration - Mobile phone
router.post('/antibody/v4/action/mobile-number', function (req, res) {
  let mobileNumber = req.session.data['mobile-number']

  if (mobileNumber == "Yes"){
    res.redirect('/antibody/v4/refer-and-triage/postcode')
  } else {
    res.redirect('/antibody/v4/refer-and-triage/postcode')
  }

})

// Version 3 - Teacher registration - Ethnic group route
router.post('/antibody/v4/action/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/antibody/v4/refer-and-triage/ethnic-background')
  } else {
    res.redirect('/antibody/v4/refer-and-triage/working')
  }

})

// Version 3 - Teacher registration - currently working
router.post('/antibody/v4/action/working', function (req, res) {
  let inWork = req.session.data['currently-in-work']
  if (inWork == "No"){
    res.redirect('/antibody/v4/refer-and-triage/occupation')
  } else {
    res.redirect('/antibody/v4/refer-and-triage/occupation')
  }
})

// Version 3 - Teacher Registration - Tested positive route
router.post('/antibody/v4/action/tested-positive', function (req, res) {
  let testedPositive = req.session.data['tested-positive']

  if (testedPositive == "Yes"){
    res.redirect('/antibody/v4/refer-and-triage/tested-positive-date')
  } else {
    res.redirect('/antibody/v4/refer-and-triage/household')
  }

})

// Version 3 - Registration - Do you have symptoms route
router.post('/antibody/v4/action2/do-you-have-symptoms', function (req, res) {
  let doYouHaveSymptoms = req.session.data['do-you-have-symptoms']

  if (doYouHaveSymptoms == "Yes"){
    res.redirect('/antibody/v4/global-registration/get-antigen-test')
  } else {
    res.redirect('/antibody/v4/global-registration/landline-number')
  }

})

// Version 3 - Registration - Ethnic group route
router.post('/antibody/v4/action2/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/antibody/v4/refer-and-triage/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/antibody/v4/refer-and-triage/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/antibody/v4/refer-and-triage/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/antibody/v4/refer-and-triage/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/antibody/v4/refer-and-triage/ethnic-background-another')
  } else {
    res.redirect('/antibody/v3/refer-and-triage/working')
  }

})

// Version 3 - Registration - NHS number route
router.post('/antibody/v4/action2/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']

  if (nhsNumberKnown == "Yes"){
    res.redirect('/antibody/v4/global-registration/nhs-number')
  } else {
    res.redirect('/antibody/v4/global-registration/check-your-answers')
  }

})



// Version 3 - Registration - Country route
router.post('/antibody/v3/action/people-confirmed', function (req, res) {
  res.redirect('/antibody/v3/home-testing')

})




module.exports = router
