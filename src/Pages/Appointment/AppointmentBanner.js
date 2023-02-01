import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { useContext } from "react";

const AppointmentBanner = ({selected,setSelected}) => {
  const {dark} = useContext(ThemeContext);

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} class="max-w-sm rounded-lg shadow-xl chair" alt="" />
          <div className="lg:mr-16">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              footer={footer}
              className={`${dark? "hover:text-primary hover:font-bold" : ""}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
