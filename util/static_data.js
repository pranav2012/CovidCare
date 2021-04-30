import { Card } from 'semantic-ui-react'

export const items = [
    <Card
        href='/details?id=oxygen'
        header='Check Oxygen Supply'
        meta='Near You'
        description=''
    />,
    <Card
        href='/details?id=beds'
        header='Check Beds'
        meta='Friend'
        description=''
    />,
    <Card
        href='/details?id=plasma'
        header='Check Plasma'
        meta='Friend'
        description=''
    />,
    <Card
        href='/details?id=medicines'
        header='Essential Medicines Available'
        meta='Friend'
        description=''
    />
];

export const helpoptions = [
    { key: 'b', text: 'Beds', value: 'beds' },
    { key: 'o', text: 'Oxygen', value: 'oxygen' },
    { key: 'p', text: 'Plasma', value: 'plasma' },
    { key: 'p', text: 'Essential Medicines', value: 'medicines' },
];

  
export const bloodoptions = [
    { key: 0, text: 'A+', value: 'A+' },
    { key: 1, text: 'A-', value: 'A-' },
    { key: 2, text: 'B+', value: 'B+' },
    { key: 3, text: 'B-', value: 'B-' },
    { key: 4, text: 'O+', value: 'O+' },
    { key: 5, text: 'O-', value: 'O-' },
    { key: 6, text: 'AB+', value: 'AB+' },
    { key: 7, text: 'AB-', value: 'AB-' },
];
  
export const diseasesoption = [
    {key: 0, text: 'HIV', value: 'hiv' },
    {key: 1, text: 'Diabeties', value: 'diabeties'},
    {key: 2, text: 'Other', value: 'other'},
    {key: 3, text: 'No Disease', value: 'no'}
];