import React from "react";

export default function Mf360Form() {
  // style="--cssBottomImg: url(https://mfnext.microfin360.com/pmk//img/login/left-bottom.png); --cssTopImg: url(https://mfnext.microfin360.com/pmk//img/login/right-top.png);
  return (
    <div className="bg-[linear-gradient(305deg,#2d58a7,#508abd)] w-full">
      <div className="login_card_centered">
        <div className="row">
          <div className="flex w-full">
            <div className=" flex items-center justify-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/health-3381c.appspot.com/o/others%2Fpmklogo_2023-08-05?alt=media&token=cbd75af4-d719-4ac0-a439-32a5646d36e8"
                alt="logo"
                className="w-20"
              />
              <span className="capitalize text-2xl text-slate-200">
                MicroFin360
              </span>
            </div>
          </div>
          <div className="">
            <div className="form-group login-card-header-bottom">
              <p className="text-center">Sign in to your account</p>
            </div>
          </div>
        </div>
        <div className="row">
          <form className="">
            <div
              className="flex"
              // style="padding-top: 1rem;"
            >
              <div className="w-8 h-8 flex- items-center justify-center bg-slate-300">
                <div>{/* <SlUser /> */}</div>
              </div>

              <input
                id="__BVID__12"
                type="text"
                placeholder="Username"
                autocomplete="off"
                value=""
                className="form-control form-control"
              />
            </div>
            <div role="group" className="input-group mb-4">
              <div className="input-group-prepend">
                <div className="input-group-text">{/* <FaLock /> */}</div>
              </div>
              <input
                id="__BVID__13"
                type="password"
                placeholder="Password"
                autocomplete="off"
                value=""
                className="form-control form-control"
              />
              <div className="invalid-feedback">Password is required</div>
            </div>
            <button
              type="submit"
              disabled="disabled"
              className="btn px-4 btn-secondary disabled"
            >
              &nbsp;Login
            </button>
          </form>
        </div>
        <div className="row">
          <div className="login-card-footer mt-2">
            <p>Copyright © 2001- 2023 DataSoft Systems Bangladesh Ltd</p>
          </div>
        </div>
      </div>
    </div>
  );
}
