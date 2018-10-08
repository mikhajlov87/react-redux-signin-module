import React from 'react';
import Label from '../../components/Label';
import Section from '../../components/Select';

export default class AboutUsField extends React.Component {
  render() {
    const options = [
      { title: 'some where item' },
      { title: 'another some where item' },
      { title: 'some where also' },
    ];
    return (
      <Label label={'where did you here about it'} center={true}>
        <Section name="about" options={options} />
      </Label>
    );
  }
}
