import React from "react";
import { Navbar } from "../components/Navbar";
import { Text, Box, useColorModeValue } from "@chakra-ui/react";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import Head from "next/head";

function Privacy() {
  const bgColor = useColorModeValue("white", "black.200");
  const textColor = useColorModeValue("black", "white");

  return (
    <>
      <Head>
        <title>TOS & Privacy Policy</title>
      </Head>
    <>
      
        <DarkModeSwitch />
        
        <Box p="30px" bg={bgColor} color={textColor}>
          <Text fontSize={"xl"} fontWeight="bold">
            Terms of Services
          </Text>
          <Text>
            Last updated: December 24, 2021 Please read these Terms of Use
            (“Terms”, “Terms of Use”) carefully before using the
            http://viadigitalcard.in website (the “Service”) operated by Via
            Creative Tech LLP (“us”, “we”, or “our”). Your access to and use of
            the Service is conditioned on your acceptance of and compliance with
            these Terms. These Terms apply to all visitors, users and others who
            access or use the Service. By accessing or using the Service you
            agree to be bound by these Terms. If you disagree with any part of
            the terms then you may not access the Service.
          </Text>
          <Text fontSize={"xl"} fontWeight="bold">
            Privacy Policy
          </Text>
          <Text fontSize={"xl"} fontWeight="bold">
            Intellectual Property
          </Text>
          <Text>
            The Service and its original content, features and functionality are
            and will remain the exclusive property of Via Creative Tech LLP and
            its licensors.
          </Text>
          <Text fontSize={"xl"} fontWeight="bold">
            Links To Other Web Sites
          </Text>
          <Text>
            Our Service may contain links to third-party web sites or services
            that are not owned or controlled by Via Creative Tech LLP. Via
            Creative Tech LLP has no control over, and assumes no responsibility
            for, the content, privacy policies, or practices of any third party
            web sites or services. You further acknowledge and agree that Via
            Creative Tech LLP shall not be responsible or liable, directly or
            indirectly, for any damage or loss caused or alleged to be caused by
            or in connection with use of or reliance on any such content, goods
            or services available on or through any such web sites or services.
            We strongly advise you to read the terms and conditions and privacy
            policies of any third-party web sites or services that you visit.
          </Text>
          <Text fontSize={"xl"} fontWeight="bold">
            Termination
          </Text>
          <Text>
            We may terminate or suspend access to our Service immediately,
            without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach the Terms. All provisions
            of the Terms which by their nature should survive termination shall
            survive termination, including, without limitation, ownership
            provisions, warranty disclaimers, indemnity and limitations of
            liability.
          </Text>
          <Text fontSize={"xl"} fontWeight="bold">
            Disclaimer
          </Text>
          <Text>
            Your use of the Service is at your sole risk. The Service is
            provided on an “AS IS” and “AS AVAILABLE” basis. The Service is
            provided without warranties of any kind, whether express or implied,
            including, but not limited to, implied warranties of
            merchantability, fitness for a particular purpose, non-infringement
            or course of performance.
          </Text>
          <Text fontSize={"xl"} fontWeight="bold">
            Governing Law
          </Text>
          <Text>
            These Terms shall be governed and construed in accordance with the
            laws of India without regard to its conflict of law provisions. Our
            failure to enforce any right or provision of these Terms will not be
            considered a waiver of those rights. If any provision of these Terms
            is held to be invalid or unenforceable by a court, the remaining
            provisions of these Terms will remain in effect. These Terms
            constitute the entire agreement between us regarding our Service,
            and supersede and replace any prior agreements we might have between
            us regarding the Service.
          </Text>
          <Text fontSize={"xl"} fontWeight="bold">
            Changes
          </Text>
          <Text>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material we will try to
            provide at least 30 days notice prior to any new terms taking
            effect. What constitutes a material change will be determined at our
            sole discretion. By continuing to access or use our Service after
            those revisions become effective, you agree to be bound by the
            revised terms. If you do not agree to the new terms, please stop
            using the Service.
          </Text>
          <Text fontSize={"xl"} fontWeight="bold">
            Changes
          </Text>
          <Text></Text>
          <Text fontSize={"xl"} fontWeight="bold">
            Website Access
          </Text>
          <Text>
            • Via Creative Tech LLP hereby grants you permission to use the
            Website as set forth in these Terms of Use, provided that: {"(i)"}{" "}
            you will not copy or distribute any part of the Website in any
            medium without Via Creative Tech’s prior written authorization;
            {" (ii)"} you will otherwise comply with the terms and conditions of
            these Terms of Use. • You will need to create an account on the
            Website in order to access some of its features. You are not
            authorized to use another user’s account with the user’s permission.
            When you create your account, you must provide information that is
            accurate. You are solely responsible for the activity that occurs on
            your account. • You shall be responsible for maintaining the
            confidentiality of your password, which you will not be under an
            obligation to reveal to any representative or agent of Via Creative
            tech. Via Creative Tech cannot and will not be liable for any loss
            or damage arising from your failure to protect your password’s
            confidentiality. You agree to immediately notify Via Creative Tech
            of any unauthorized activity that occurs on your account or any
            suspected breach of security including loss, theft, or unauthorized
            disclosure of your password. • If you create an account on Via
            Creative Tech, you represent that you are of legal age to form a
            binding contract, have the requisite authority to bind the other
            party to this Agreement and are not a person barred by any law from
            using the Website. You shall not use the Website if you are not
            legally competent to form a binding contract. • You agree to provide
            true, accurate, current and complete information about yourself in
            all required fields of the registration form. If any of your
            information changes, you agree to update your registration
            information as soon as possible. If Via Creative Tech suspects that
            your registration information is not complete, current, or accurate,
            or that you have otherwise violated these Terms of Use, your account
            may be subjected to suspension or termination, and you may be barred
            from using the Website. • You agree not to use or launch any
            automated system, including without limitation, “robots”, “spiders”,
            “scrapers”, or similar technological devices or programs.
            Notwithstanding the foregoing, Via Creative Tech grants the
            operators of public search engines permission to use spiders to copy
            materials from the Website for the sole purpose of creating publicly
            available searchable indices of the materials, but not caches or
            archives of such materials. Via Creative Tech reserves the right to
            revoke these exceptions either generally or in specific cases, in
            its sole discretion.
          </Text>
          <Text fontSize={"xl"} fontWeight="bold">
            Credit card and Debit Card details
          </Text>
          <Text>
            You agree understand and confirm that the credit card and debit card
            details provided by you for availing the services on Website will be
            correct and accurate and you shall not use the credit card which is
            not lawfully owned by you. You further agree and undertake to
            provide correct and valid credit card details to Via Creative Tech
            Website. Further the said information will be not be utilized and
            shared by Via Creative Tech with any of the third parties unless
            required by law, regulation or court order.
          </Text>
          <Text fontSize={"xl"} fontWeight="bold">
            Usage of our Digital Cards
          </Text>
          <Text>
            Our cards are not compatible with NFC {"(Near-field communication)"}
            phones. In case of non-NFC phones, QR codes will be provided for the
            Digital Card usage.
          </Text>
          <Text fontSize={"xl"} fontWeight="bold">
            Copyright, Trademark Compliance &#38; Complaints
          </Text>
          <Text>
            We honor the intellectual property rights of others. If you believe
            that your work has been copied or used on the website in a way that
            constitutes copyright or trademark infringement, please notify us by
            following the procedure set forth in the immediately following
            paragraph. Except in limited instances under authorized agreements,
            we do not reproduce or manufacture the products offered on our site,
            but rather we purchase or license products from third party
            suppliers that represent to us that they have sufficient rights to
            allow us to display and sell the products on the website. Upon
            receipt of any bona-fide claim of infringement, or upon becoming
            aware of any actual or alleged infringement by any other means, we
            will remove such actual or alleged infringing product(s) from the
            website and/or cease sales of the product(s) pending our
            investigation. If you believe that your Content has been copied in a
            way that constitutes copyright and/or trademark infringement, please
            notify Via Creative Tech at customercare@viadigitalcard.in, and
            provide the following information (“Notice”): {"a)"} an electronic
            or physical signature of the person authorized to act on behalf of
            the owner of the copyright/trademark interest; {"b)"} a description
            of the copyrighted work and/or trademark claimed to have been
            infringed;{" c)"} a description of where the claimed infringing
            Content is located on our Site;{" d)"} your address, telephone
            number, and email address; {"e)"} a statement by you that you have a
            good faith belief that the disputed use is not authorized by the
            copyright/trademark owner, its agent, or the law;
            {" f) "}a statement by you, made under penalty of perjury, that the
            above information in your Notice is accurate and that you are
            authorized to act on behalf of the owner of the copyright/trademark
            interest involved. The Notice of claims of copyright or other
            intellectual property infringement can be reached as follows: VIA
            CREATIVE TECH LLP – Plot C/106, Poonam Park View, Global City, Virar{" "}
            {"(W)"}, Maharashtra, India – 401303. Third Party Websites The
            Website may contain links to third party websites that are not owned
            or controlled by Via Creative Tech. Via Creative Tech has no control
            over, and assumes no responsibility for, the content, privacy
            policies, or practices of any third-party websites. By using the
            Website, you specifically release Via Creative Tech from any and all
            liability arising from your use of any third-party website.
          </Text>
          <Text fontSize={"xl"} fontWeight="bold">
            Termination
          </Text>
          <Text>
            Via Creative Tech may, under certain circumstances and without prior
            notice, immediately terminate your viadigitalcard.in account and
            access to the Website and any other viadigitalacard.in services.
            Cause for such termination shall include, but not be limited to: (a)
            breaches or violations of the Terms of Use; (b) requests by law
            enforcement or other government agencies; (c) a request by you
            (self-initiated account deletions); (d) discontinuance or material
            modification to the Website (or any part thereof); (e) unexpected
            technical or security issues or problems; (f) extended periods of
            inactivity; (g) engagement by you in fraudulent or illegal
            activities; (h) your actions that have caused or may cause any harm,
            damage or loss to the other Users or viadigitalcard.in
          </Text>
          <Text fontSize={"xl"} fontWeight="bold">
            Warranty Disclaimer
          </Text>
          <Text>
            YOU AGREE THAT YOUR USE OF THE WEBSITE SHALL BE AT YOUR SOLE RISK.
            TO THE FULLEST EXTENT PERMITTED BY LAW, VIA CREATIVE TECH, AND ANY
            PARENT, SUBSIDIARY, AFFILIATE, DIRECTOR, OFFICER, EMPLOYEE,
            LICENSOR, DISTRIBUTOR, SUPPLIER, AGENT, RESELLER, OWNER, OR OPERATOR
            OF VIA CREATIVE TECH, DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
            IN CONNECTION WITH THE WEBSITE AND YOUR USE THEREOF. VIA CREATIVE
            TECH MAKES NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR
            COMPLETENESS OF THE{" WEBSITE’S "}CONTENT OR THE CONTENT OF ANY
            SITES LINKED TO THIS SITE AND ASSUMES NO LIABILITY OR RESPONSIBILITY
            FOR ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT, (II)
            PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER,
            RESULTING FROM YOUR ACCESS TO AND USE OF THE WEBSITE, (III) ANY
            UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND
            ALL PERSONAL INFORMATION STORED THEREIN, (IV) ANY INTERRUPTION OR
            CESSATION OF TRANSMISSION TO OR FROM THE WEBSITE, (IV) ANY BUGS,
            VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR
            THROUGH OUR WEBSITE BY ANY THIRD PARTY, AND/OR (V) ANY ERRORS OR
            OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND
            INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, EMAILED,
            TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE WEBSITE. VIA
            CREATIVE TECH DOES NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
            RESPONSIBILITY FOR ANY HYPERLINKED WEBSITE OR OTHER PROMOTION, AND
            VIA CREATIVE TECH WILL NOT BE A PARTY TO OR IN ANY WAY BE
            RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND
            THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. NO ADVICE OR
            INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM VIA
            CREATIVE TECH OR THROUGH OR FROM THE SERVICE SHALL CREATE ANY
            WARRANTY NOT EXPRESSLY STATED IN THE TERMS OF USE. AS WITH THE
            PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY
            ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION
            WHERE APPROPRIATE.
          </Text>
          <Text fontSize={"xl"} fontWeight="bold">
            Limitation of Liability
          </Text>
          <Text>
            IN NO EVENT SHALL VIA CREATIVE TECH, OR ANY PARENT, SUBSIDIARY,
            AFFILIATE, DIRECTOR, OFFICER, EMPLOYEE, LICENSOR, DISTRIBUTOR,
            SUPPLIER, AGENT, RESELLER, OWNER, OR OPERATOR OF VIA CREATIVE TECH,
            BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
            PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER RESULTING FROM ANY,{" "}
            {"(I)"} ERRORS, MISTAKES, OR INACCURACIES OF CONTENT, {"(II)"}{" "}
            PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER,
            RESULTING FROM YOUR ACCESS TO AND USE OF OUR WEBSITE, {"(III) "}ANY
            UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND
            ALL PERSONAL INFORMATION STORED THEREIN,
            {"(IV)"} ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM
            OUR WEBSITE,{" (V) "}ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE,
            WHICH MAY BE TRANSMITTED TO OR THROUGH OUR WEBSITE BY ANY THIRD
            PARTY, AND/OR
            {"(VI)"} ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR
            DAMAGE OF ANY KIND INCURRED AS A RESULT OF YOUR USE OF ANY CONTENT
            POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE
            WEBSITE, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER
            LEGAL THEORY, AND WHETHER OR NOT THE COMPANY IS ADVISED OF THE
            POSSIBILITY OF SUCH DAMAGES. THE FOREGOING LIMITATION OF LIABILITY
            SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW IN THE APPLICABLE
            JURISDICTION.YOU SPECIFICALLY ACKNOWLEDGE THAT VIA CREATIVE TECH
            SHALL NOT BE LIABLE FOR USER SUBMISSIONS OR FOR ANY DEFAMATORY,
            OFFENSIVE, OR ILLEGAL CONDUCT OF ANY THIRD PARTY AND THAT THE RISK
            OF HARM OR DAMAGE FROM THE FOREGOING RESTS ENTIRELY WITH YOU. The
            Website is controlled and offered by VIA CREATIVE TECH from its
            facilities in Mumbai, India. VIA CREATIVE TECH makes no
            representations that the Website is appropriate or available for use
            in other locations. Those who access or use the Website from other
            jurisdictions do so at their own volition and are responsible for
            compliance with local law.
          </Text>
          <Text fontSize={"xl"} fontWeight="bold">
            Indemnity
          </Text>
          <Text>
            You agree to defend, indemnify and hold harmless Via Creative Tech,
            and any parent, subsidiary, affiliate, director, officer, employee,
            licensor, distributor, supplier, agent, reseller, owner, or operator
            of Via Creative Tech, from and against any and all claims, damages,
            obligations, losses, liabilities, costs or debt, and expenses
            {"  (including but not limited to attorneys fees)"} arising from
            {": (i) "}your use of and access to the Website; {"(ii)"} your
            violation of any term of these Terms of Use;{" (iii)"} your
            violation of any third party right, including without limitation any
            copyright, property, or privacy right; or{" (iv)"} any claim that
            one of your User Submissions caused damage to a third party. This
            defense and indemnification obligation will survive these Terms of
            Use and your use of the Website.
          </Text>
          <Text fontSize={"xl"} fontWeight="bold">
            General
          </Text>
          <Text>
            If any provision of these Terms of Use is deemed invalid by a court
            of competent jurisdiction, the invalidity of such provision shall
            not affect the validity of the remaining provisions of these Terms
            of Use, which shall remain in full force and effect. No waiver of
            any term of this these Terms of Use shall be deemed a further or
            continuing waiver of such term or any other term, and Via Creative{" "}
            {"Tech’s"} failure to assert any right or provision under these
            Terms of Use shall not constitute a waiver of such right or
            provision.
          </Text>
          <Text fontSize={"xl"} fontWeight="bold">
            Modifications to the Terms of Use
          </Text>
          <Text>
            Via Creative Tech may at any time modify these Terms of Use without
            any prior notification to you. You can access the latest version of
            the Terms of Use at any given time. You should regularly review
            these Terms. In the event the modified Terms are not acceptable to
            you, you should discontinue using the service. However, if you
            continue to use the service, you agree to accept and abide by the
            modified Terms of Use.
          </Text>
          <Text fontSize={"xl"} fontWeight="bold">
            Contact Us
          </Text>
          <Text>
            If you have any questions about these Terms, please contact us at
            contact@viadigitalcard.in
          </Text>
        </Box>
      </>
    </>
  );
}

export default Privacy;
