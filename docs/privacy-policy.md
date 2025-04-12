# **Privacy Policy**

This Privacy Policy describes how Omnis ("the bot", "the application"), developed and maintained solely by the Developer, handles information collected from users who interact with the bot on Discord.
This policy is designed to be transparent about what data is accessed, how it's used, and what is done to protect your privacy.

By using Omnis, you acknowledge and agree to the practices described in this policy.
If you have any questions or concerns, you are encouraged to contact the Developer directly.

## **Data Collection and Storage**

### **Data Stored on the Server**

The only information that Omnis stores on the server is the **Discord User ID** (also known as a Snowflake).
This identifier is used to link a user’s settings and track premium feature usage.
The following data is associated with a user’s ID and is retained securely:

- Total monthly allowance for premium features
- Remaining allowance
- Used allowance
- Selected Text-to-Speech voice
- Custom summon greeting
- Wake phrase (what the bot says when activated)
- Preferred search engine for music tracks

This data is strictly used for personalization and access control of premium features.
It is not shared with third parties, profiled, or used for tracking or advertising.

### **Data Held in Memory (Not Stored)**

To function properly, Omnis temporarily accesses certain Discord-related information in memory.
This data is never stored or logged, and is discarded immediately after it is no longer needed.
The in-memory data includes:

- Discord username
- Discord server name
- Current voice state of users in the active server
- Voice channel name
- Connected user count in a voice channel
- User IDs and usernames of all users in the same voice channel
- Reference of the user who summoned the bot
- The last user the bot spoke to in the voice channel
- The last user it interacted with in the server
- Which user queued each track
- Any data entered into commands (e.g. search queries or prompt inputs)

All command input and voice-related content is processed only while needed to execute a response or action, then discarded.
This data is not used to train AI models or build user profiles.

## **Audio and Voice Features**

Omnis supports voice features through integrations with trusted services. Voice recordings are only used for temporary processing and are not retained by the Developer:

- **Speech-to-Text (STT)** is powered by Google Cloud. Audio is streamed to Google’s STT API for real-time recognition. Neither the Developer nor Google logs or stores voice recordings or transcripts.
- **Text-to-Speech (TTS)** functionality is powered by Google Cloud TTS. Input is converted to audio and played in the user’s voice channel.
- **Wake Word Detection** is using Picovoice's Porcupine engine. No audio data is tracked or uploaded.

For reference, see [Google’s data logging policy](https://cloud.google.com/speech-to-text/docs/data-logging) and [Picovoice’s privacy policy](https://picovoice.ai/docs/privacy-policy/#:~:text=No%20audio%20data%20generated%20using,unless%20otherwise%20requested%20or%20specified.).

## **Purpose of Data Use**

Data is used solely for the following purposes:

- Delivering voice and text responses to the correct user
- Managing server-specific or user-specific preferences
- Enabling premium features based on user configuration
- Ensuring smooth interaction between the bot and Discord

No data is used for advertising, analytics, or shared with unauthorized third parties.

## **Third-Party Services**

Omnis communicates with the following services solely for operational functionality:

- **OpenAI** – used to generate text/image responses for text-based prompts
- **Google Cloud** – used for text-to-speech and speech recognition
- **Picovoice (Porcupine)** – used for wake word detection

Data sent to these services is strictly limited to user input required to complete the action requested.
These services do not have access to stored user settings or identities beyond what is sent for execution.

## **Data Retention and Deletion**

- Only the Discord User ID and user-specific settings are stored.
- All in-memory operational data is cleared as soon as it’s no longer required.
- Stored data is retained as long as the user continues to use premium features, and may be deleted upon request.

To request deletion of your stored settings or Discord ID, please contact the Developer at [7thousandnumbers@gmail.com](mailto:7thousandnumbers@gmail.com).

## **Security Practices**

The Developer implements reasonable security measures to safeguard user data:

- Stored data is access-restricted to the Developer only
- Sensitive operations (such as token handling) are encrypted and secured
- No logging of conversations or command content occurs

## **Children’s Privacy**

Omnis is not intended for use by individuals under the age of 13.
In accordance with [Discord’s terms](https://discord.com/terms), users must be at least 13 years old or meet the minimum legal age of their country to use Omnis.

The Developer does not knowingly collect or store data from children under 13.

## **Changes to This Privacy Policy**

This Privacy Policy may be updated periodically to reflect changes in how Omnis handles data or to comply with Discord’s or legal requirements.
You are encouraged to review this page regularly.

**Last updated:** 4/12/2025

## **Contact**

If you have questions about your data or wish to request a copy of your data, you can contact the Developer via:

- 📧 [7thousandnumbers@gmail.com](mailto:7thousandnumbers@gmail.com)

The Developer values your privacy and will try to respond to inquiries promptly and respectfully.
