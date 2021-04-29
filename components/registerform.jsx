import { Form, Message } from 'semantic-ui-react'
import { helpoptions, bloodoptions, diseasesoption } from '../util/static_data';
import { Formik } from 'formik';
import { regformvalues as initialvalue } from '../util/initial-data';
import { regformvalidation as schema } from '../util/validations';
import FormError from './FormError';

export default function Registerform() {
    return (
        <Formik
            initialValues={initialvalue}
            enableReinitialize={true}
            validationSchema={schema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log("hey", values);
                // setSubmitting(true);
                // resetForm({ values: '' });
            }}
        >
            {props => {
                const {
                    values,// eslint-disable-line
                    isSubmitting,
                    handleChange,// eslint-disable-line
                    handleBlur,// eslint-disable-line
                    handleSubmit,// eslint-disable-line
                    setFieldValue,
                    setFieldTouched,
                } = props;
                return (
                    <Form>
                        <h1 className="gray-600 text-3xl my-6 text-center font-bold">Register Yourself</h1>
                        <Form.Group widths='equal'>
                            <Form.Input name="firstname" onChange={handleChange} onBlur={handleBlur} value={values.firstname} fluid label='First name' placeholder='First name' />
                            <FormError name="firstname" />
                            <Form.Input name="lastname" onChange={handleChange} onBlur={handleBlur} value={values.lastname} fluid label='Last name' placeholder='Last name' />
                            <FormError name="lastname" />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} fluid label='Email' placeholder='Email' />
                            <FormError name="email" />
                            <Form.Input name="phone" onChange={handleChange} onBlur={handleBlur} value={values.phone} fluid label='Phone Number' placeholder='Phone Number' />
                            <FormError name="phone" />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Select
                                fluid
                                name="city"
                                onBlur={(e, { name, value }) => setFieldTouched(name, value)}
                                onChange={(e, { name, value }) => setFieldValue(name, value)}
                                values={values.city}
                                label='Select your city'
                                options={helpoptions}
                                placeholder='City'
                            />
                            <FormError name="city" />
                            <Form.Select
                                fluid
                                name="district"
                                onBlur={(e, { name, value }) => setFieldTouched(name, value)}
                                onChange={(e, { name, value }) => setFieldValue(name, value)}
                                value={values.district}
                                label='Select your district'
                                options={helpoptions}
                                placeholder='District'
                            />
                            <FormError name="district" />
                        </Form.Group>
                        <Form.Select
                            fluid
                            name="supply"
                            onBlur={(e, { name, value }) => setFieldTouched(name, value)}
                            onChange={(e, { name, value }) => setFieldValue(name, value)}
                            value={values.supply}
                            label='Select how can you help us?'
                            options={helpoptions}
                            placeholder='How can you help'
                        />
                        <FormError name="supply" />

                        {values.supply !== "" && <>
                            {  // hospital section
                                values.supply === "beds" &&
                                <>
                                    <Form.Select
                                        fluid
                                        name="hospital"
                                        onBlur={(e, { name, value }) => setFieldTouched(name, value)}
                                        onChange={(e, { name, value }) => setFieldValue(name, value)}
                                        value={values.hospital}
                                        label='Select Hospital Name'
                                        options={helpoptions}
                                        placeholder='Select Hospital'
                                    />
                                    <FormError name="hospital" />
                                    <Form.Group widths="equal">
                                        <Form.Input type="number" name="wardbeds" onChange={handleChange} onBlur={handleBlur} value={values.wardbeds} fluid label='How many beds in wards' placeholder='Beds in Ward' />
                                        <FormError name="wardbeds" />
                                        <Form.Input type="number" name="icubeds" onChange={handleChange} onBlur={handleBlur} value={values.icubeds} fluid label='How many beds in ICU' placeholder='Beds in ICU' />
                                        <FormError name="icubeds" />
                                        <Form.Input type="number" name="vantilators" onChange={handleChange} onBlur={handleBlur} value={values.vantilators} fluid label='How many ventilators' placeholder='ventilators' />
                                        <FormError name="vantilators" />
                                    </Form.Group>
                                    <Form.Checkbox name="isoxygen" onChange={handleChange} onBlur={handleBlur} value={values.isoxygen} label='is oxygen available?' />
                                    <FormError name="isoxygen" />
                                </>
                            }

                            { // Plasma donors
                                values.supply === "plasma" &&
                                <>
                                    <Form.Group widths='equal'>
                                        <Form.Input name="recoverydate" onChange={handleChange} onBlur={handleBlur} value={values.recoverydate} type="date" fluid label='Covid Recovery Date' />
                                        <FormError name="recoverydate" />
                                        <Form.Select
                                            fluid
                                            name="bloodgroup"
                                            onBlur={(e, { name, value }) => setFieldTouched(name, value)}
                                            onChange={(e, { name, value }) => setFieldValue(name, value)}
                                            value={values.bloodgroup}
                                            label='Blood Group'
                                            options={bloodoptions}
                                            placeholder='Choose your Blood Group'
                                        />
                                        <FormError name="bloodgroup" />
                                    </Form.Group>
                                    <Form.Select 
                                        fluid 
                                        name="disease" 
                                        onBlur={(e, { name, value }) => setFieldTouched(name, value)}
                                        onChange={(e, { name, value }) => setFieldValue(name, value)}
                                        value={values.disease} 
                                        label='Do you have any Disease' 
                                        options={diseasesoption} 
                                        placeholder='Any Disease' 
                                    />
                                    <FormError name="disease" />
                                    <Form.Checkbox name="isage" onChange={handleChange} onBlur={handleBlur} value={values.isage} label='My age is between 19-50 years' />
                                    <FormError name="isage" />
                                    <Form.Checkbox name="isweight" onChange={handleChange} onBlur={handleBlur} value={values.isweight} label='My body weight is greater than 50 Kg' />
                                    <FormError name="isweight" />
                                    <Form.Checkbox name="isplasma" onChange={handleChange} onBlur={handleBlur} value={values.isplasma} label='Have you recived plasma donation?' />
                                    <FormError name="isplasma" />
                                </>
                            }

                            { //for oxygen
                                values.supply === "oxygen" &&
                                <>
                                    <Form.Input name="orgname" onChange={handleChange} onBlur={handleBlur} value={values.orgname} fluid label='Name Of your organization (if not then your name)' placeholder='Organization Name' />
                                    <FormError name="orgname" />
                                    <Form.Input name="maplink" onChange={handleChange} onBlur={handleBlur} value={values.maplink} fluid label='Google map location link' placeholder='Google Map Link' />
                                    <FormError name="maplink" />
                                    <Form.Group widths='equal'>
                                        <Form.Input name="instalink" onChange={handleChange} onBlur={handleBlur} value={values.instalink} fluid label='Instagram Link' placeholder='Instagram' />
                                        <FormError name="instalink" />
                                        <Form.Input name="twitterlink" onChange={handleChange} onBlur={handleBlur} value={values.twitterlink} fluid label='Twitter Link' placeholder='Twitter' />
                                        <FormError name="twitterlink" />
                                        <Form.Input name="fblink" onChange={handleChange} onBlur={handleBlur} value={values.fblink} fluid label='Facebook Link' placeholder='Facebook' />
                                        <FormError name="fblink" />
                                    </Form.Group>
                                </>
                            }

                            { // Medicine
                                values.supply === "medicines" &&
                                <>
                                    <Form.Input name="shopname" onChange={handleChange} onBlur={handleBlur} value={values.shopname} fluid label='Name Of your shop (if not Organisation name)' placeholder='Shop Name' />
                                    <FormError name="shopname" />
                                    <Form.Input name="medname" onChange={handleChange} onBlur={handleBlur} value={values.medname} fluid label='Name of medicine available' placeholder='Medicine Name' />
                                    <FormError name="medname" />
                                    <Form.Input name="maplink" onChange={handleChange} onBlur={handleBlur} value={values.maplink} fluid label='Google map location link' placeholder='Google Map Link' />
                                    <FormError name="maplink" />
                                </>
                            }
                        </>}
                        <Form.Checkbox name="istrue" onChange={handleChange} onBlur={handleBlur} value={values.istrue} label='I agree all the information provided is true' />
                        <FormError name="istrue" />
                        <Message
                            success
                            header='Form Completed'
                            content="You're all signed up for the newsletter"
                        />
                        <div className="flex justify-center"><Form.Button disabled={isSubmitting} onClick={handleSubmit} color="blue">Submit</Form.Button></div>
                    </Form>
                )
            }}
        </Formik>
    )
}
