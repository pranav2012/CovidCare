import { Form, Message } from 'semantic-ui-react'
import { helpoptions, bloodoptions } from '../util/static_data';
import { Formik } from 'formik';
import { reqformvalues as initialvalue } from '../util/initial-data';
import { reqformvalidation as schema } from '../util/validations';
import FormError from './FormError';

export default function RequestForm({ isopen, setisopen }) {
    if (!isopen) return <></>;

    return (
        <>
            <div onClick={()=>setisopen(false)} className={`fixed z-10 top-0 bottom-0 right-0 left-0 overlay ${isopen?'active':''}`}></div>
            <div className="rounded p-5 w-11/12 md:overflow-y-visible overflow-y-auto md:w-3/5 floatbox">
                <div onClick={() => setisopen(false)} className='absolute right-2 top-0 text-2xl cursor-pointer'>&times;</div>
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
                                <h1 className="gray-600 text-3xl my-6 text-center font-bold">Make a Request</h1>
                                <Form.Group widths='equal'>
                                    <Form.Input name="firstname" onChange={handleChange} onBlur={handleBlur} value={values.firstname} fluid label="Patient's First name" placeholder='First name' />
                                    <FormError name="firstname" />
                                    <Form.Input name="lastname" onChange={handleChange} onBlur={handleBlur} value={values.lastname} fluid label="Patient's Last name" placeholder='Last name' />
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
                                    label='How can we help you?'
                                    options={helpoptions}
                                    placeholder='choose'
                                />
                                <FormError name="supply" />

                                {values.supply !== "" && <>

                                    { // Plasma donors
                                        values.supply === "plasma" &&
                                        <>
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
                                        </>
                                    }

                                    { // Medicine
                                        values.supply === "medicines" &&
                                        <>
                                            <Form.Input name="medname" onChange={handleChange} onBlur={handleBlur} value={values.medname} fluid label='Name of medicine available' placeholder='Medicine Name' />
                                            <FormError name="medname" />
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
                                <div className="flex justify-center"><Form.Button disabled={isSubmitting} onClick={handleSubmit} color="blue">Request</Form.Button></div>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </>
    )
}
