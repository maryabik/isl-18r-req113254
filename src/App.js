import './App.css';
import {useMemo, useRef, useState} from "react";
import Select from 'react-select'
import countryList from "react-select-country-list";

function App() {

  const checkBoxRef = useRef(null);
  const [show, setShow] = useState(false);
  const [submit, setSubmit] = useState(false);
  const onHandleChange = () => {
    if(checkBoxRef.current.checked === true){
      console.log(checkBoxRef.current.checked);
    }
  }

  // const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])
  const [nation, setNation] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    marital_status: '',
    street:'',
    unit_no:'',
    city:'',
    province: '',
    postal_code: '',
    dob:'',
    email: '',
    phone_number: '',
    nationality:' '
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
      // nationality: nation.label,
        [name]: value,
  }));
};

  const changeHandler = nation => {
    setNation(nation)
  }


  const formSubmitHandler = (values) => {
    values.preventDefault();
    setFormData(prevState => ({
      ...prevState,
      nationality: nation.label,
    }));
  }


  return (
      <div className="App">
        <div className="  main-wrapper">
          <div className="  form-wrapper">
            <form
                onSubmit={formSubmitHandler}
            >

              <div className="  mb-5">
                <label htmlFor="name" className="  form-label"> Applicant Name: </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Applicant Name"
                    className="  form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
              </div>

              <div className="  mb-5">
                <label htmlFor="name" className="  form-label"> Martial Status: </label>
                <select
                    className=" select form-input"
                    name="marital_status" id="marital_status"
                    value={formData.marital_status}
                    onChange={handleChange}
                >
                  <option value="">-Select Marital Status-</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Widowed">Widowed</option>
                  <option value="Separated">Separated</option>
                  <option value="Divorced">Divorced</option>
                </select>

              </div>

              <div className="  mb-5   pt-3">
                <div className="  mb-5">
                  <label htmlFor="street" className="  form-label"> Street: </label>
                  <input
                      type="text"
                      name="street"
                      id="street"
                      placeholder="Applicant Name"
                      className="  form-input"
                      value={formData.street}
                      onChange={handleChange}
                      required
                  />
                </div>
                <div className="flex flex-wrap   -mx-3">
                  <div className="w-full sm:w-half   px-3">
                    <div className="  mb-5">
                      <label htmlFor="unit_no" className="  form-label"> Unit Number: </label>
                      <input
                          type="text"
                          name="unit_no"
                          id="unit_no"
                          placeholder="unit number"
                          className="  form-input"
                          value={formData.unit_no}
                          onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="w-full sm:w-half   px-3">
                    <div className="  mb-5">
                      <label htmlFor="city" className="  form-label"> City: </label>
                      <input
                          type="text"
                          name="city"
                          id="city"
                          placeholder="Enter city"
                          className="  form-input"
                          value={formData.city}
                          onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="w-full sm:w-half   px-3">
                    <div className="  mb-5">
                      <label htmlFor="province" className="  form-label"> Province: </label>
                      <select
                          className="select form-input"
                          name="province"
                          value={formData.province}
                          onChange={handleChange}
                      >
                        <option value=" "> -Select Province-</option>
                        <option value="AB">Alberta</option>
                        <option value="BC">British Columbia</option>
                        <option value="MB">Manitoba</option>
                        <option value="NB">New Brunswick</option>
                        <option value="NL">Newfoundland and Labrador</option>
                        <option value="NS">Nova Scotia</option>
                        <option value="ON">Ontario</option>
                        <option value="PE">Prince Edward Island</option>
                        <option value="QC">Quebec</option>
                        <option value="SK">Saskatchewan</option>
                        <option value="NT">Northwest Territories</option>
                        <option value="NU">Nunavut</option>
                        <option value="YT">Yukon</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full sm:w-half   px-3">
                    <div className="  mb-5">
                      <label htmlFor="postal_code" className="form-label"> Postal Code: </label>
                      <input
                          type="text"
                          name="postal_code"
                          id="postal_code"
                          placeholder="Postal Code"
                          className="  form-input"
                          value={formData.postal_code}
                          onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap   -mx-3">
                <div className="w-full sm:w-half   px-3">
                  <div className="  mb-5 w-full">
                    <label htmlFor="dob" className="  form-label"> Date Of Birth: </label>
                    <input
                        type="date"
                        name="dob"
                        id="dob"
                        className="  form-input"
                        value={formData.dob}
                        onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="  mb-5">
                <label htmlFor="email" className="form-label"> Email Address: </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="phone_number" className="  form-label"> Canadian Phone Number: </label>
                <input
                    type="phone"
                    min="0" // Optional: Set minimum value
                    step="9"
                    name="phone_number"
                    id="phone_number"
                    placeholder="Enter your canadian phone number"
                    className="  form-input"
                    value={formData.phone_number}
                    onChange={handleChange}
                />
              </div>

              <div className="mb-5">
                <input
                    ref={checkBoxRef}
                    type="checkbox"
                    name="my-checkbox"
                    id="my-checkbox"
                    onChange={onHandleChange}
                    defaultChecked={false}
                    onClick={() => setShow(!show)}
                />
                <label htmlFor="my-checkbox"> I identify as indigenous. </label>
              </div>

              {
                show ?
                    <div className="mb-5">
                      <label htmlFor="nationality" className="  form-label"> Nationality: </label>
                      <Select
                          name="nationality"
                          options={options}
                          value={nation}
                          onChange={changeHandler}
                      />
                    </div> : null
              }


              <div>
                <button
                    className="btn"
                    type="submit"
                    onClick={() => setSubmit(!submit)}
                >Submit</button>

                {
                  submit ?

                      <div className="form-label">
                        <br/>
                        <br/>
                        <textarea
                            rows={8}
                            cols={80}
                        >
                          {JSON.stringify(formData)}
                        </textarea>
                      </div> : null
                }
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

export default App;
