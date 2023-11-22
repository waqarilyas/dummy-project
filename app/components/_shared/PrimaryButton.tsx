import { Button } from "flowbite-react";

interface IPrimaryButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const PrimaryButton = (props: IPrimaryButton) => {
  const { title } = props;

  return (
    <Button
      type="submit"
      className="w-full bg-gradient-to-b from-custom-gradientBlue-primary to-custom-gradientBlue-secondary text-white font-bold rounded-full border-none py-2 px-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
      {...props}
    >
      {title}
    </Button>
  );
};

export default PrimaryButton;
