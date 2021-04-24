import React from 'react'
import { Form, Message } from 'semantic-ui-react'

const options = [
  { key: 'b', text: 'Beds', value: 'beds' },
  { key: 'o', text: 'Oxygen', value: 'oxygen' },
  { key: 'p', text: 'Plasma', value: 'plasma' },
  { key: 'p', text: 'Remdesivir', value: 'remdesivir' },
]

export default function Register() {

  return (
    <div className="min-h-screen flex bg-gray-50 justify-center items-center">
      <div className="w-3/5 p-5 m-6 bg-white rounded shadow-lg">
        <Form>
          <h1 className="gray-600 text-3xl my-6 text-center font-bold">Register Yourself</h1>
          <Form.Group widths='equal'>
            <Form.Input fluid label='First name' placeholder='First name' />
            <Form.Input fluid label='Last name' placeholder='Last name' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Email' placeholder='Email' />
            <Form.Input fluid label='Phone Number' placeholder='Phone Number' />
          </Form.Group>
          <Form.Select
            fluid
            label='Select Equipments you can help with'
            options={options}
            placeholder='Select how can you help'
          />
          <Form.Group widths='equal'>
            <Form.Select
                fluid
                label='Select Hospital Name'
                options={options}
                placeholder='Select Hospital'
            />
            <Form.Select
                fluid
                label='Hospital is located in'
                options={options}
                placeholder='Select City'
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Name Of your organization' placeholder='Organization Name' />
            <Form.Select
                fluid
                label='Your organization is located in'
                options={options}
                placeholder='Select City'
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Name Of your shop' placeholder='Shop Name' />
            <Form.Select
                fluid
                label='Your shop is located in'
                options={options}
                placeholder='Select City'
            />
          </Form.Group>
          <Form.Input fluid label='Google map location link' placeholder='Google Map Link' />
          <Form.Input fluid label='Instagram Link' placeholder='Instagram' />
          <Form.Input fluid label='Facebook Link' placeholder='Facebook' />
          <Form.TextArea label='About' placeholder='Tell us about your services' />
          <Form.Checkbox label='I agree to the Terms and Conditions' />
          <Message
            success
            header='Form Completed'
            content="You're all signed up for the newsletter"
          />
          <div className="flex justify-center"><Form.Button color="blue">Submit</Form.Button></div>
        </Form>
      </div>
    </div>
  )
}