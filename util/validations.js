import * as Yup from 'yup';

export const regformvalidation = Yup.object().shape({
    firstname: Yup.string()
        .trim()
        .matches(/^[a-z A-Z]+$/, "Invalid name "),
    lastname: Yup.string()
        .trim()
        .matches(/^[a-z A-Z]+$/, "Invalid name "),
    email: Yup.string()
        .trim()
        .email("Not a valid email address")
        .required("Required"),
    phone: Yup.string()
        .required("Required")
        .matches(/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/, "Invalid number"),
    city: Yup.string()
        .trim()
        .required("Required"),
    district: Yup.string()
        .trim()
        .required("Required"),
    supply: Yup.string()
        .trim()
        .required("Required"),
    hospital: Yup.string()
        .trim()
        .required("Required"),
    wardbeds: Yup.number()
        .positive("Can't be a Negative value") 
        .required("Required"),
    icubeds: Yup.number()
        .positive("Can't be a Negative value") 
        .required("Required"),
    vantilators: Yup.number()
        .positive("Can't be a Negative value") 
        .required("Required"),
    isoxygen: Yup.bool()
        .required("Required"),
    recoverydate: Yup.string()
        .trim()
        .required("Required"),
    bloodgroup: Yup.string()
        .trim()
        .required("Required"),  
    disease: Yup.string()
        .trim()
        .required("Required"),
    isage: Yup.bool()
        .required("Required"),
    isweight: Yup.bool()
        .required("Required"),
    isplasma: Yup.bool()
        .required("Required"),
    orgname: Yup.string()
        .trim()
        .required("Required"),
    maplink: Yup.string()
        .trim()
        .matches(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,"Not a valid link"),
    instalink: Yup.string()
        .trim()
        .matches(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,"Not a valid link"),
    twitterlink: Yup.string()
        .trim()
        .matches(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,"Not a valid link"),
    fblink: Yup.string()
        .trim()
        .matches(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,"Not a valid link"),
    shopname: Yup.string()
        .trim()
        .required("Required"),
    medname: Yup.string()
        .trim()
        .required("Required"),
    istrue: Yup.bool()
        .required("Required"),

})

export const reqformvalidation = Yup.object().shape({

})