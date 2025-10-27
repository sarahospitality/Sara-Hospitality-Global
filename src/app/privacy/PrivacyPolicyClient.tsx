"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function PrivacyPolicyClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-br from-[#f26d35]/5 via-gray-50 to-[#f26d35]/10">
        <div className="container mx-auto px-6 sm:px-4">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-4">
              <Shield className="w-4 h-4" />
              <span>Privacy Policy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              How we protect and handle your personal information
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 sm:py-12">
        <div className="w-full px-6 sm:px-4 lg:px-12">

          {/* Privacy Policy Content */}
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8 lg:p-12 space-y-8">
              
              {/* Introduction */}
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Sara Hospitality LLC supports the highest standards of integrity for every online visitor. When you register at the Sara Hospitality LLC website, our goal is to respect your privacy. This Privacy Policy sets forth how we handle information we obtain from you and learn about you when you visit our website, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>The information we collect.</li>
                  <li>The choices that are available to you regarding how the information is used and to whom it is disseminated.</li>
                  <li>Your rights to access and correct or update your personally-identifiable information and</li>
                  <li>Our pledge to have reasonable security procedures that are in place to protect against the loss, misuse or alteration of information under our control.</li>
                </ul>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  If you have any questions or comments about Sara Hospitality LLC&apos;s Privacy Policy, please contact us at{" "}
                  <a href="mailto:sales@sarahospitalityusa.com" className="text-[#f26d35] hover:text-[#f26d35]/80 font-medium underline">
                    sales@sarahospitalityusa.com
                  </a>.
                </p>
              </div>

              {/* Notice Section */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">NOTICE: Information We Collect and How We Use It</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Sara Hospitality LLC may collect two types of information about you when you visit our site: personal information (including, by way of example only, your name, address, telephone number and e-mail address) and non-personal, aggregate information (such as information regarding the pages on our site that you have visited and your IP address).
                </p>
              </div>

              {/* Personally-Identifiable Information */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Personally-Identifiable Information: What We Collect</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  The only personally-identifying information we collect and store about you is the information that you choose to provide to us.
                </p>

                <div className="space-y-6 mt-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">Sara Hospitality LLC Site Registration</h3>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      The Sara Hospitality LLC site registration feature is an easy way to store your shipping and billing information in order to make subsequent visits more efficient. Visitors can register by submitting their name, e-mail address, physical address, and telephone number (required), and by choosing a password (required). To access their stored profile, visitors will be required to enter a username and password.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">Electronic Mail</h3>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      We will also gather your personally-identifiable information when you send us an e-mail. We will use this information to respond to your e-mail. We may also use the information to send you notifications about our service.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">Business Partners/Professional Visitors</h3>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      Business partners and professional visitors requesting access to specialized content areas of this Web site may be required to provide identifying information.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sharing Your Information */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Sharing Your Information</h2>
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    <strong>Internally</strong> we may share your personally-identifiable information within Sara Hospitality LLC and our affiliated companies.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    <strong>Externally</strong> shipments of our products are fulfilled via a third party. We will share your personally-identifiable information with any such third party in order to fulfill your order. In addition, we may disclose your personally-identifiable information if required to by law.
                  </p>
                </div>
              </div>

              {/* Non Personally-Identifiable Information */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Non Personally-Identifiable Information: What We Collect</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  The Sara Hospitality LLC Website may collect non-personally identifiable information during your visit, such as type of browser, operating system, domain name, or IP address. An IP address is a number that is automatically assigned to your computer whenever you&apos;re surfing the Web. Web servers – the computers that &quot;serve up&quot; Web pages – automatically identify your computer by its IP address. When you visit pages on Sara Hospitality LLC&apos;s Web site, our servers log your IP address. This means that your session will be logged, but you remain anonymous to us. IP address information is used only to improve the service of the Sara Hospitality LLC site.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Sara Hospitality LLC also collects information through &quot;referrers&quot; and various environmental variables. A &quot;referrer&quot; is information the Web browser passes along to Sara Hospitality LLC&apos;s Web server that references the URL from which you came. &quot;Environmental variables&quot; include, among other things, the domain from which you access the Internet, the time you accessed our Web site, type of Web browser and operating system or platform used, the Internet address of the Web site you left to visit Sara Hospitality LLC, the names of the pages you visit while at our Web site, and the Internet address of the Web site you then visit. We collect all of this information to allow us to detect broad demographic trends, to provide information tailored to your interests and to enhance your experience on Sara Hospitality LLC&apos;s Web site. Sara Hospitality LLC may store &quot;referrer&quot; information for a period of time prior to deleting this information.
                </p>
              </div>

              {/* Cookies */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Cookies</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  At certain points in your visit to the Sara Hospitality LLC site, our server may send a &quot;cookie&quot; file to your computer. Your Web browser may prompt you to accept this file unless you have set your browser preferences to accept all cookies automatically. Cookies are employed primarily as a service to our customers, to extend the relevance and responsiveness of the Sara Hospitality LLC site. We may link cookie information with any personally-identifiable information you provide us.
                </p>
              </div>

              {/* Profiling */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Profiling</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  To help us improve our Web site and to ensure that we make every effort to provide you with information and offers that are of interest to you, we may merge your personally-identifiable information with click-stream data and other data we have (including cookies and offline data). We will provide notice of this, as well as an opportunity to opt-out of it, at the time and place of information collection and before data is entered on our system.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  We may also develop a non-identifiable profile on you based on the pages within our site that you visit.
                </p>
              </div>

              {/* Links */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Links</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  This Web site may contain links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to read the privacy statements of each and every Web site that they visit. This privacy statement applies solely to information collected when you visit our Web site.
                </p>
              </div>

              {/* Notification of Changes */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Notification of Changes</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Any changes to this Privacy Policy will be posted online so you will always be aware of what information we collect, how we use it, and under what circumstances we disclose it. We will use information in accordance with the privacy policy under which the information was collected.
                </p>
              </div>

              {/* Special Policy Regarding Information from Children */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Special Policy Regarding Information from Children Under Thirteen</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  This Web site is not targeted to children under the age of 13, and we do not knowingly request personally identifiable information from any child under the age of 13 without parental consent. When we do receive such information, we delete it as soon as we discover it and do not use it or share it with third parties.
                </p>
              </div>

              {/* Choice */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Choice</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Sara Hospitality LLC provides the following choices regarding the use of your information.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>You may choose not to provide us with any contact information.</li>
                  <li>You may set your browser to reject cookies and to erase cookies that have already been placed on your hard drive. However, if you do so, your ability to navigate some sections of the site may be impaired.</li>
                  <li>If you do not want your personal or non-personal information merged with cookie and other information, you should not use the Sara Hospitality LLC Web site.</li>
                </ul>
              </div>

              {/* Security */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Security</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  We make every effort to have reasonable security procedures in place to protect the loss, misuse or alteration of information under our control. If you have any questions about the security at our Website, you can send an email to{" "}
                  <a href="mailto:sales@sarahospitalityusa.com" className="text-[#f26d35] hover:text-[#f26d35]/80 font-medium underline">
                    sales@sarahospitalityusa.com
                  </a>
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

