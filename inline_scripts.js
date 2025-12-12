
      const promptTemplates = [
        {
          subject: "WhatsApp Account Appeal - Standard Unban Request",
          body: `Dear WhatsApp Support Team,

I am writing to formally request the review and restoration of my WhatsApp account associated with phone number: [PHONE_NUMBER].

My account was recently suspended, and I believe this may have been due to a misunderstanding or technical error. I have been a loyal WhatsApp user and have always strived to follow the platform's terms of service and community guidelines.

Account Details:
- Phone Number: [PHONE_NUMBER]
- Ban Type: [BAN_TYPE]
- Approximate Ban Date: [Please specify if known]

I kindly request that you review my account status and consider restoring my access. I am committed to maintaining compliance with all WhatsApp policies going forward.

Thank you for your time and consideration. I look forward to your response.

Best regards,
[Your Name]`,
          info: "This template provides a professional standard appeal format to WhatsApp support.",
        },
        {
          subject: "WhatsApp Account Appeal - Mistaken Ban Review",
          body: `Dear WhatsApp Support Team,

I am contacting you regarding what I believe to be a mistaken ban on my WhatsApp account linked to phone number: [PHONE_NUMBER].

I believe my account was banned in error, as I have not violated any of WhatsApp's terms of service or community guidelines. I use WhatsApp primarily for personal communication with family and friends, and I am careful to follow all platform rules.

Account Information:
- Phone Number: [PHONE_NUMBER]
- Ban Type: [BAN_TYPE]
- I have not engaged in spam, harassment, or any prohibited activities

I respectfully request that you review my account and the circumstances that led to this ban. I am confident that upon investigation, you will find that this was indeed a mistake.

I would greatly appreciate the restoration of my account, as WhatsApp is an essential communication tool for me to stay connected with my loved ones.

Thank you for your understanding and assistance.

Sincerely,
[Your Name]`,
          info: "Use this template if you believe your ban was issued by mistake or error.",
        },
        {
          subject: "WhatsApp Account Appeal - Policy Compliance Commitment",
          body: `Dear WhatsApp Support Team,

I am writing to appeal the ban on my WhatsApp account (phone number: [PHONE_NUMBER]) and to demonstrate my commitment to full compliance with WhatsApp's policies.

I acknowledge that my account was suspended, and I want to take this opportunity to reaffirm my understanding of and commitment to WhatsApp's terms of service and community guidelines.

My Commitment:
- Phone Number: [PHONE_NUMBER]
- Ban Type: [BAN_TYPE]
- I commit to strictly following all WhatsApp policies
- I will not engage in any prohibited activities
- I will report any suspicious or inappropriate content I encounter
- I will use WhatsApp solely for legitimate communication purposes

I have taken time to thoroughly review WhatsApp's terms of service and community guidelines to ensure I fully understand what is expected of users. I am committed to being a responsible member of the WhatsApp community.

I kindly request that you consider giving me another opportunity to use WhatsApp while adhering to all platform rules.

Thank you for your consideration.

Respectfully,
[Your Name]`,
          info: "This template emphasizes your commitment to following WhatsApp's policies going forward.",
        },
        {
          subject: "WhatsApp Account Review Request - Ban Appeal",
          body: `Dear WhatsApp Review Team,

I am formally requesting a comprehensive review of the ban placed on my WhatsApp account associated with phone number: [PHONE_NUMBER].

I would like to request a thorough review of my account activity and the circumstances that led to the suspension. I believe that a detailed examination of my usage patterns and communication history will demonstrate that I have been using the platform appropriately.

Review Request Details:
- Phone Number: [PHONE_NUMBER]
- Ban Type: [BAN_TYPE]
- Request for: Complete account activity review
- Willing to provide: Any additional information you may require

I am confident that a fair and thorough review will show that my account should be restored. I have always used WhatsApp for legitimate communication purposes and have not engaged in any activities that would violate the platform's terms.

I am prepared to cooperate fully with any additional verification processes you may require and am committed to maintaining strict compliance with all WhatsApp policies.

I appreciate your time and look forward to a positive resolution.

Thank you,
[Your Name]`,
          info: "This template requests a comprehensive review of your account and ban circumstances.",
        },
        {
          subject:
            "WhatsApp Terms Violation Appeal - Account Restoration Request",
          body: `Dear WhatsApp Appeals Team,

I am writing to appeal the suspension of my WhatsApp account (phone number: [PHONE_NUMBER]) and to address any potential terms violations that may have occurred.

If my account was suspended due to a terms violation, I want to acknowledge this and demonstrate my understanding of proper WhatsApp usage. I have since educated myself thoroughly on the platform's guidelines and am committed to full compliance.

Appeal Details:
- Phone Number: [PHONE_NUMBER]
- Ban Type: [BAN_TYPE]
- I acknowledge the importance of following all platform rules
- I have reviewed and now fully understand WhatsApp's terms of service
- I commit to using WhatsApp only for appropriate communication

I understand the importance of maintaining a safe and respectful environment for all WhatsApp users. If I inadvertently violated any terms, I sincerely apologize and assure you that such incidents will not occur again.

I am requesting a second chance to demonstrate that I can be a responsible and compliant user of the WhatsApp platform.

Thank you for considering my appeal.

Sincerely,
[Your Name]`,
          info: "Use this template if you acknowledge a potential violation and want to demonstrate change.",
        },
        {
          subject: "WhatsApp Final Appeal - Last Chance Request",
          body: `Dear WhatsApp Support Leadership,

I am submitting this final appeal for the restoration of my WhatsApp account associated with phone number: [PHONE_NUMBER].

I understand the severity of account suspensions and the importance of maintaining platform integrity. This is my sincere and final request for consideration of my account restoration.

Final Appeal Details:
- Phone Number: [PHONE_NUMBER]
- Ban Type: [BAN_TYPE]
- This is my final appeal submission
- I have thoroughly reviewed all WhatsApp policies
- I am fully committed to exemplary platform behavior

I want to emphasize my genuine need for WhatsApp access, as it is my primary means of communication with family, friends, and essential services. The loss of my account has significantly impacted my ability to stay connected with important people in my life.

I solemnly promise that if given this final opportunity, I will:
- Strictly adhere to all WhatsApp terms and guidelines
- Use the platform only for legitimate communication
- Report any inappropriate content I encounter
- Be an exemplary member of the WhatsApp community

I humbly request your consideration of this final appeal and would be deeply grateful for another chance.

Thank you for your time and consideration.

Most respectfully,
[Your Name]`,
          info: "This is a comprehensive final appeal template for serious consideration.",
        },
      ];

      function showPromptInfo() {
        const select = document.getElementById("promptSelect");
        const info = document.getElementById("promptInfo");
        const selectedPrompt = promptTemplates[select.value];
        info.textContent = selectedPrompt.info;
      }

      function sendAppeal() {
        const phoneNumber = document.getElementById("phoneNumber").value.trim();
        const banType = document.getElementById("banType").value;
        const promptIndex = document.getElementById("promptSelect").value;

        if (!phoneNumber) {
          alert("Please enter your phone number before sending the appeal.");
          return;
        }

        const selectedPrompt = promptTemplates[promptIndex];
        const banTypeText =
          banType === "permanent" ? "Permanent Ban" : "Normal Ban";

        // Replace placeholders in the email body
        let emailBody = selectedPrompt.body
          .replace(/\[PHONE_NUMBER\]/g, phoneNumber)
          .replace(/\[BAN_TYPE\]/g, banTypeText);

        // Try to open Gmail app using mailto protocol
        const mailtoUrl = `mailto:support@support.whatsapp.com?subject=${encodeURIComponent(
          selectedPrompt.subject
        )}&body=${encodeURIComponent(emailBody)}`;

        // Fallback to Gmail web if not on mobile or app not installed
        // Try mailto first
        window.location.href = mailtoUrl;

        // Optionally, fallback after a delay (uncomment if you want fallback)
        // setTimeout(() => {
        //   const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=support@support.whatsapp.com&su=${encodeURIComponent(
        //     selectedPrompt.subject
        //   )}&body=${encodeURIComponent(emailBody)}`;
        //   window.open(gmailUrl, "_blank");
        // }, 1000);
      }

      function openHelp() {
        alert(
          "For additional help:\n\n1. Make sure your phone number is correctly formatted\n2. Choose the most appropriate template for your situation\n3. The tool will open Gmail with your appeal pre-written\n4. You can edit the message before sending\n5. Be honest and professional in your appeal"
        );
      }

      // Modal functions
      function closeModal() {
        document.getElementById("welcomeModal").classList.add("hidden");
      }

      function joinTelegram() {
        // Replace with your actual Telegram link
        window.open("https://t.me/Freenethubz", "_blank");
        closeModal();
      }

      function joinWhatsApp() {
        // Replace with your actual WhatsApp channel link
        window.open(
          "https://whatsapp.com/channel/0029VbB3G3BH5JM0s7gtKA2d",
          "_blank"
        );
        closeModal();
      }

      // Initialize prompt info on page load
      showPromptInfo();
    