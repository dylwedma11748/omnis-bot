# What can Omnis do?

## **Slash commands**

| Command  | Description |
| ------------- | ------------- |
| /help  | Shows a detailed list of commands. |
| /summon  | Summon Omnis to your voice channel. |
| /exile  | Exile Omnis from your voice channel. |
| /say  | Make Omnis say something. <br> phrase (optional) - The phrase to say. If not provided here, a modal will open. <br> *Requires a premium membership.* |
| /quiet  | Make Omnis stop speaking. <br> *Requires a premium membership.* |
| /talk  | Talk to Omnis. <br> incognito (required) - Hide from other users. <br> tts (required) - Use TTS for Omnis's response. <br>  prompt (optional) - What to say to Omnis. If not provided here, a modal will open. <br> *Requires a premium membership.* |
| /clear  | Clear your conversation with Omnis. <br> *Requires a premium membership.* |
| /embed  | Create an embed. <br>  title (required) - The title of the embed. Use "/nl" to add a new line. <br> description (required) - The description of the embed. Use "/nl" to add a new line. <br> footer (required) - Include the Omnis logo as a footer. <br> |
| /upload  | Upload a local media file to stream. <br> file (required) - The media file. <br> |
| /stream  | Stream a a media file that's already been uploaded to Discord. <br> asset (optional) - The Discord CDN link for the asset. If not provided here, a modal will open. <br> |
| /pause  | Pause the audio player. |
| /settings  | Modify settings. <br> *Requires a premium membership.* |
| /skip  | Skip to the next track in the queue. |
| /resume  | Resume the audio player. |
| /volume | Show or set the audio player's volume. <br> volume (optional) - Volume level to apply. If not provided here, it will show the current volume. <br> *Requires a premium membership.* |
| /queue | Show the audio player queue. |
| /patreon | Check Patreon status. |
| /invite | Invite Omnis to another server. |

<br>

## **Voice commands**
!!! tip "Waking up Omnis"
    Omnis needs to be woken up to be given a voice command. To do so, just say "Omnis" with it in your voice channel. Omnis will respond by saying "Yes?" and start listening for your input.

!!! warning "Accuracy"
    Voice commands may not work perfectly. Things like background noise and distortion may affect it's accuracy. A good quality microphone with noise cancellation is recommended.
	
| Prompt  | Description |
| ------------- | ------------- |
| "pause"  | Pause the audio player.  |
| "unpause" or "resume" | Resume the audio player  |
| "skip"  | Skip to the next song in the queue.  |
| "stop"  | Stop the audio player and clear the queue.  |
| "volume"  | This command has three ways of using it: <br> <br> 1. "volume %i" - Set the volume of the audio player to the specifed number. <br> 2. "volume up" Increase the volume of the audio player by 10. <br> 3. "volume down" - Decrease the volume of the audio player by 10. <br> <br> *Requires a premium membership.* |



!!! info "Auto-wake for user response (Premium)"
    For premium users, any other voice prompts are treated as chat prompts and Omnis will respond using OpenAI and Google's Text-to-Speech. When talking with Omnis in a voice channel, if Omnis responds with a question, it will automatically wake up and listen for your input.