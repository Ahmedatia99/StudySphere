import Defination from "../Courses/atoms/Defination";
import InputContact from "./atoms/InputsContact";
export default function ContactDetails() {
  return (
    <main>
      <section>
        <Defination
          heading="Contact Us"
          paragraph="Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
        />
      </section>
      <section>
        <InputContact />
      </section>
    </main>
  );
}
