import { useDeferredValue, useEffect, useId, useState } from "react";

export default function HookTest() {
  const FullName = useId();
  console.log("FullName : ", FullName);

  const email = useId();
  console.log("email : ", email);

  const term = useId();
  console.log("term : ", term);

  return (
    <>
      <div>
        <div>
          <span>TEST</span>
        </div>
        <div>
          <div>
            {/*lebel 은 input의 이름을 적는 태그, htmlFor에 input의 아이디 또는 네임을 적어 인풋과 연결*/}
            <label htmlFor={FullName}>Full name</label>
            <input type="text" id={FullName} name="Full Name" />
          </div>

          <div>
            <label htmlFor={email}>Enter Email</label>
            <input type="email" id={email} name={"email"} />
          </div>

          <div>
            <input type="checkbox" id={term} name="term" />
            <label htmlFor={term}>Agree with term</label>
          </div>
        </div>
      </div>
      <div>
        <div>
          <span>Test2</span>
          <h2>Choose password</h2>
          <PasswordField />
          <h2>Confirm password</h2>
          <PasswordField />
        </div>
      </div>
    </>
  );
}

function PasswordField() {
  const passwordHintId = useId();

  return (
    <>
      <label>
        Password:
        <input type="password" aria-describedby={passwordHintId} />
      </label>
      <p>The password should contain at least 18 characters</p>
    </>
  );
}

function SearchPage() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
}

// useId() example : https://plainenglish.io/blog/the-useid-hook-in-react-18-take-a-look
