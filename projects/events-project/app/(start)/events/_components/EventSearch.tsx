'use client';

import { useFormState } from 'react-dom';

import Button from '@/src/components/ui/Button';
import classes from './event-search.module.scss';
import { serverAction } from './actions';
import { useRef } from 'react';

export default function EventSearch({ onSearch }: any) {
  // Server method
  // const [state, formAction] = useFormState(serverAction, null);
  // Client method
  const yearInputRef = useRef<HTMLSelectElement>(null);
  const monthInputRef = useRef<HTMLSelectElement>(null);
  function submitHandler(event: any) {
    event.preventDefault();
    const year: string | undefined = yearInputRef.current?.value;
    const month: string | undefined = monthInputRef.current?.value;

    onSearch(year, month);
  }

  return (
    // Server method
    // <form className={classes.form} action={formAction}>
    // Client method
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" name="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" name="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      {/*<Button link="/events">Find events</Button>*/}
      <button type="submit">Find events</button>
    </form>
  );
}
