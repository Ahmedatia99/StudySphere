import { Button } from "./Button/Button.tsx";
import classNames from "classnames";
import PropTypes from "prop-types"; // Import PropTypes

export default function DefineCompo(props) {
  return (
    <div className="md:px-4 flex justify-between flex-wrap items-center">
      <div>
        <h2
          className={classNames(
            `font-semibold text-textcook`,
            props.value
              ? "laptop:text-4xl mobile:text-3xl mb-3"
              : "laptop:text-xl mobile:text-base mb-1"
          )}
        >
          {props.title}
        </h2>

        <p
          className={classNames(
            `text-spantext`,
            props.value ? "laptop:max-w-2xl tablet:max-w-lg" : "max-w-4xl",
            "laptop:text-base mobile:text-sm mb-1"
          )}
        >
          {props.description}
        </p>
      </div>
      {props.value && (
        <Button
          variant="second"
          action="View All"
          paddingname="mobile:py-3 mobile:px-10 mr-0 my-0 mobile:my-5"
          path={"courses"}
        />
      )}
    </div>
  );
}
DefineCompo.propTypes = {
  value: PropTypes.bool,
  title: PropTypes.string.isRequired, // title is required
  description: PropTypes.string.isRequired, // description is required
};
