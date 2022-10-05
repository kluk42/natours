import { useState } from 'react';
import { Input } from '../Input/Input';

import '../../sass/base/_typography.scss';
import { Button, ButtonColorTypes } from '../Button/Button';
import { RadioInput } from '../RadioInput/RadioInput';
import './Booking.scss';

export const Booking = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [selectedOption, setSelectedOption] = useState<'small' | 'large' | ''>('');
  return (
    <section className="section-book">
      <div className="book">
        <form onSubmit={e => e.preventDefault()} noValidate className="book-form">
          <h2 className="heading-secondary book-form__heading">Start looking now</h2>
          <Input
            type="text"
            label="Full name"
            id="Full name"
            value={name}
            placeholder="Full Name"
            onChange={e => setName(e.target.value)}
          />
          <Input
            type="email"
            label="Email address"
            id="Email address"
            value={email}
            placeholder="Email address"
            onChange={e => setEmail(e.target.value)}
          />
          <div className="book-form__radio-group">
            <RadioInput
              label="Small tour group"
              id="small"
              value={selectedOption}
              onChange={() => setSelectedOption('small')}
              name="size"
            />
            <RadioInput
              label="Large tour group"
              id="large"
              value={selectedOption}
              onChange={() => setSelectedOption('large')}
              name="size"
            />
          </div>
          <Button
            colorType={ButtonColorTypes.Green}
            title="Book now!"
            type="submit"
            className="book-form__submit_button"
          />
        </form>
      </div>
    </section>
  );
};
