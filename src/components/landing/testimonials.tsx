import { Card, CardBody, Typography } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

export function TestimonialSectionOne() {
  return (
    <section className="py-8 px-12 lg:py-20">
      <div className="container mx-auto">
        <Card
          shadow={false}
          className="flex-col-reverse overflow-hidden rounded-3xl md:flex-row md:gap-8 bg-white"
        >
          <CardBody className="py-20  ">
            <div className="mb-8 flex items-center">
              {[...Array(5).keys()].map((el, key) => (
                <StarIcon className="h-6 w-8 text-yellow-600" key={key} />
              ))}
            </div>
            <Typography
              variant="h6"
              color="dark"
              className="mb-10 font-medium leading-normal"
            >
 <h2><b>a. Registration Terms</b></h2><br/>

1) Applicant of SM FPEB UPI can choose 2 (two) Study Programs according to their choice. <br/>
2) Complete online registration on the https://pmb.upi.edu<br/>
3) UPI will not refund any payment that has been made <br/>
4) Every applicant can only do online register once <br/>
5) If the applicant intends to change the choice of study program after the completing registration process, the applicant must carry out the process from the beginning and pay for the registration fee. <br/>
6) Applicant must fill out the Declaration of Willingness to Pay Tuition Fees and Will Not Move to the Regular Class. The completed form is then uploaded forthe registration process of the SM FPEB UPI. <br/><br/><br/>

<h2><b>b. Registration Mechanism</b></h2><br/>

Once the applicants registered on the https://pmb.upi.edu page, the next 
process is carried out based on the following stages:<br/><br/><br/>

1. Take Pay Number<br/>
Applicants can click on "Get Pay Number", then fill in the requested data to get a pay number.<br/><br/><br/>

2. Pay the Registration Fee<br/>
For applicants who are domiciled in Indonesia, after obtaining a Pay Number, 
the Applicant deposits the registration fee and entry selection through Bank 
Negara Indonesia (BNI) Teller, Bank Mandiri, Bank Jabar Banten (BJB) at any 
branch or by other methods (such as e-Banking). or through an ATM by 
entering the PMB SM FPEB UPI Pay Number. After the fee is deposited, 
participants will receive proof of payment and a PIN.<br/>

For Applicants who are domiciled abroad, payment of the registration fee can 
only be made by transfer to Bank Mandiri. This transfer is made through the 
local Teller Bank or through the local ATM or Mobile/e-Banking from the 
local Bank Mobile/e-Banking System. Payment is made according to No. VA 
(which consists of the number 89978 plus the Pay Number, without spaces), 
with the Swift Code BMRIIDJA. <br/><br/><br/>

3. Complete Biodata to Obtain Selection Number<br/>
Complete the biodata by logging in using the payment number and PIN you 
obtained, continue filling in the form until you get a selection number.<br/><br/><br/>

4. Print Applicants Cards and Check Exam Locations<br/>
Applicants must print the applicant card (physically) to show to the supervisor 
during the exam. The Participant Card will be used for the conditions for 
taking the exam. On the Participant Card there is information on the Schedule 
and Location of the Exam.<br/><br/><br/>

5. Check Exam Information<br/>
Participants are expected to always be able to access the https://pmb.upi.edu 
page and their respective registration accounts to get the latest information 
regarding the exam. Participants can also view information on selection test 
results through the https://pmb.upi.edu page on their respective registration 
accounts.<br/><br/><br/><br/>

<h2><b>a. Registration time</b></h2><br/>

a) Collection of Paid Numbers is done online from 17 June – 07 July 2023.<br/>
b) Payment of the Registration Fee begins on 17 June 2023 and ends on 07 July 2023 at 15.00 WIB.<br/>
c) Filling in applicant biodata online begins on June 17 2023 and ends on July 7 2023 at 23.59 WIB.<br/>
d) Printing of Applicant Cards begins on June 17 2023 and ends on July 7 2023 at 23.59 WIB.<br/><br/><br/>

<h2><b>b. Registration fee</b></h2><br/>

The registration fee for SM UPI 2023 is IDR 350,000 (Three Hundred Fifty Thousand Rupiah)<br/>
            </Typography>
            <Typography
              variant="lead"
              color="dark"
              className="font-medium"
            >
              FPEB
            </Typography>
            <Typography
              color="dark"
              className="font-normal opacity-70"
            >
              Registration Official
            </Typography>
          </CardBody>
          
        </Card>
      </div>
    </section>
  );
}

export default TestimonialSectionOne;
