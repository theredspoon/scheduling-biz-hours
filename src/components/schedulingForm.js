import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import '../App.css';

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/* Field input component displays errors */
const renderField = ({ input, type, meta: { touched, error, warning } }) => (
    <div>
      <input {...input} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
)

/* Field select component displays errors */
const renderSelectField = ({ input, meta: { pristine, error }, children }) => (
    <div>
      <select {...input}>
        {children}
      </select>
      {pristine || (error && <span>{error}</span>)}
    </div>
)

/* Redux Form sync validation for the whole form */
 const validate = (values) => {  
  const errors = {};
  if (values.start_weekday === "-1" || !values.start_weekday) {
    errors.start_weekday = 'Pick a weekday';
  }
  if (values.end_weekday === "-1" || !values.end_weekday) {
    errors.end_weekday = 'Pick a weekday';
  }
  return errors;
}

class SchedulingForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    
    /* validate that all fields are required */
    const required = value => value ? undefined : 'Required';

    return (
      <form onSubmit={handleSubmit} className="form-group">
        <div className="row">
          <div className="col-xs-2 col-xs-offset-1">
            <label htmlFor="start_weekday">Start Day</label>
            <Field name="start_weekday" component={renderSelectField} required>
              <option value="-1" disabled>Select a day</option>
              {weekdays.map((day, index) => 
                <option key={'start_weekday' + index} value={index}>{day}</option>  
              )}
            </Field>
          </div>
          <div className="col-xs-2">
            <label htmlFor="start_time">Start Time</label>
            <Field name="start_time" component={renderField} type="time" validate={required}/>
          </div>
          <div className="col-xs-2">
            <label htmlFor="end_weekday">End Day</label>
            <Field name="end_weekday" component={renderSelectField} required>
              <option value="-1" disabled>Select a day</option>
              {weekdays.map((day, index) => 
                <option key={'end_weekday' + index} value={index}>{day}</option>  
              )}
            </Field>
          </div>
          <div className="col-xs-2">
            <label htmlFor="end_time">End Time</label>
            <Field name="end_time" component={renderField} type="time" validate={required}/>
          </div>
          <button type="submit" className="col-xs-1 btn btn-primary">Create</button>
        </div>
      </form>
    );
  }
}

SchedulingForm = reduxForm({
  form: 'scheduler',
  validate
})(SchedulingForm);

export default SchedulingForm;