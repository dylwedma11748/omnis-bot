# **What can Omnis do?**

## **Slash commands**

!!! tip "Direct Messages"
    All slash commands can be used in a direct message channel with Omnis.
	For commands requiring a voice channel, Omnis can automatically detect and utilize the voice channel you're currently in.
	You can use this to keep your interactions hidden from other users.

| Command  | Description |	| Command  | Description |
| ------------- | ------------- | 	| ------------- | ------------- |
| /patreon | Check Patreon status. | | /pause | Pause the audio player. |
| /invite | Invite Omnis to another server. | | /resume | Resume the audio player. |
| /help | Shows a detailed list of commands. | | /queue | Show the audio player queue. |
| /summon | Summon Omnis to your voice channel. | | /skip | Skip to the next track in the queue. |
| /exile | Exile Omnis from your voice channel. | | /shuffle | Shuffle the tracks in the queue. |
| /wakeup | Wake up Omnis in your voice channel. | | /stop | Stop the audio player and clear the queue. |
| /settings | Modify settings. Requires a premium membership. | | /previous | Go back to the previous track in the queue. |
| /quiet | Make Omnis stop speaking. <br> Requires a premium membership. | | /upload | Upload a local media file to stream. <br> file (required) - The media file. <br> |
| /clear | Clear your conversation with Omnis. <br> Requires a premium membership. | | /autoplay | Enable/Disable autoplay for the audio player. <br> autoplay (required) - Use autoplay |
| /say | Make Omnis say something. <br> phrase (optional) - The phrase to say. If not provided here, a modal will open. Requires a premium membership. | | /seek | Seek to a position in the currently playing track. <br> position (required) The position to seek to, formatted as MM:SS or HH:MM:SS. |
| /imagine | Create an image from a prompt. <br> prompt (required) - The prompt to create an image from. <br> hd (required) - Generate an high definition image (more expensive). <br> Requires a premium membership. | | /play | Play specifed asset. <br> asset (optional) - The asset to play. If not provided here, a modal will open. <br> Paste a supported link or enter a search term. |
| /talk | Talk to Omnis. Requires a premium membership. <br> incognito (required) - Hide from other users. <br> tts (required) - Use TTS for Omnis's response. <br> prompt (optional) - What to say to Omnis. | | /search | Search YouTube for a track. <br> query (optional) - The search query. If not provided here, a modal will open. <br> The results will be sent to your direct messages. |
| /embed | Create an embed. <br> title (required) - The title of the embed. Use "/nl" to add a new line. <br> description (required) - The embedded description. Use "/nl" to add a new line. <br> footer (required) - Include the Omnis logo as a footer. <br> | | /volume | Show or set the audio player's volume. <br> volume (optional) - Volume level to apply. If not provided here, it will show the current volume. <br> Requires a premium membership. |

<br>

## **Voice commands**
!!! tip "Waking up Omnis"
    Omnis needs to be woken up to be given a voice command.
	To do so, just use the /wakeup command.
	Omnis will respond by saying it's onWake phrase and start listening for your input.
	Premium users can wake Omnis up in a voice channel by saying it's name.

!!! warning "Accuracy"
    Voice commands may not work perfectly.
	Things like background noise and distortion may affect it's accuracy.
	A good quality microphone with noise cancellation is recommended.
	Using your phone's microphone on the Discord app may not work very well.
	
| Prompt  | Description |  | Prompt  | Description |
| ------------- | ------------- |	| ------------- | ------------- |
| "play"  | This command has two ways of using it. <br> <br> 1. "play %s" - Play specifed song. <br> 2. "play %s by %s" - Play specifed song by specifed author. <br> <br> Omnis will search YouTube and play the first result. | | "volume"  | This command has two ways of using it: <br> <br> 1. "volume %i" - Set the volume of the audio player to the specifed number. <br> 2. "volume up or down" - Set the volume of the audio player up/down by 10. <br> <br> *Requires a premium membership.* |
| "pause"  | Pause the audio player.  | | "unpause" or "resume" | Resume the audio player  |
| "skip"  | Skip to the next song in the queue.  | | "stop"  | Stop the audio player and clear the queue.  |

!!! info "Voice chat prompts and auto-wake for user response (Premium)"
    For premium users, any other voice prompts are treated as chat prompts and Omnis will respond using OpenAI and Google's Text-to-Speech. When talking with Omnis in a voice channel, if Omnis responds with a question, it will automatically wake up and listen for your input.