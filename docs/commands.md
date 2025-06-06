---
hide:
  - navigation
  - toc
---

<script>
function copyToClipboard(button) {
    let text = button.previousElementSibling.textContent;
	
    navigator.clipboard.writeText(text).then(() => {
        let icon = button.querySelector("img");
		
        if (icon) {
            icon.src = "../images/check.png";
        }
		
        button.querySelector("span").textContent = "Copied!";

        setTimeout(() => {
            if (icon) {
                icon.src = "../images/copy.png";
            }
			
            button.querySelector("span").textContent = "Copy to clipboard";
        }, 1500);
    });
}
</script>


# **What can Omnis do?**

## **Slash commands**

!!! tip "Direct Messages and User Installations"
    All slash commands can be used in a direct message channel with Omnis, or on any server by installing Omnis to your Discord account.
	For commands requiring a voice channel, Omnis can automatically detect and utilize the voice channel you're currently in as long as Omnis is also a member of that server.
	You can use this to keep your interactions hidden from other users.
	
=== "Audio Player"
	<details>
        <summary>/play - Play the specifed asset.</summary>
        <p><b>Description:</b>
		<br>
		<i>Add a track to the queue. This command can take in a supported link, or a search query. If the asset is not provided in the command, Omnis will open a modal in order to enter the asset.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/play asset: https://www.youtube.com/watch?v=dQw4w9WgXcQ</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button>
		<br>
		<i><code>/play asset: Technotronic - Pump Up the Jam</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
    </details>
	
	<details>
        <summary>/nowplaying - Show the currently playing track and the music player controller.</summary>
        <p><b>Description:</b>
		<br>
		<i>Show auto-updating detailed information about the currently playing track, providing links where available, and show the music player controller with buttons for interactions.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/nowplaying</i></code>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
    </details>
	
	<details>
        <summary>/search - Search for a track.</summary>
        <p><b>Description:</b>
		<br>
		<i>Perform a search query and select from one of the results to add to the audio player's queue. If the query is not provided in the command, Omnis will open a modal in order to enter the query.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/search</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button>
		<br>
		<i><code>/search query: Technotronic - Pump Up the Jam</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
    </details>
	
	<details>
        <summary>/upload - Upload a local media file to stream.</i></summary>
		<p><b>Description:</b>
		<br>
        <i>Upload a local media file to stream it's audio content in the audio player. The specified command option is required. Only supported media files can be uploaded. This command uses Discord's built-in file uploader. Because of this, only Discord Nitro members can upload files larger than 10 MB.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/upload</i></code>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
    </details>
	
	<details>
        <summary>/pause - Pause the audio player.</i></summary>
		<p><b>Description:</b>
		<br>
        <i>Pause the audio player without clearing the queue, allowing it to be resumed.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/pause</i></code>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
    </details>
	
	<details>
        <summary>/resume - Resume the audio player.</i></summary>
		<p><b>Description:</b>
		<br>
        <i>Resume the audio player if it was paused.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/resume</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
    </details>
	
	<details>
        <summary>/skip - Skip to the next track in the queue</i></summary>
		<p><b>Description:</b>
		<br>
        <i>Skip to the next track in the audio player's queue.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/skip</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
    </details>
	
	<details>
        <summary>/previous - Go back to the previous track in the queue.</i></summary>
		<p><b>Description:</b>
		<br>
        <i>Go back to the previous track in the audio player's queue and start that track from the beginning.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/previous</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
    </details>
	
	<details>
        <summary>/shuffle - Shuffle the tracks in the queue.</i></summary>
		<p><b>Description:</b>
		<br>
        <i>Shuffle all of the tracks in the audio player's queue.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/shuffle</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
    </details>
	
	<details>
        <summary>/repeat - Set repeat mode.</i></summary>
		<p><b>Description:</b>
		<br>
        <i>Set the repeat mode for the audio player. You will be prompted to select a mode.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/repeat</i></code>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
    </details>
	
	<details>
        <summary>/lyrics - Get the lyrics for the currently playing track.</i></summary>
		<p><b>Description:</b>
		<br>
        <i>Show the lyrics for the currently playing track. Omnis may not be able to find lyrics for every single track.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/lyrics</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
    </details>
	
	<details>
        <summary>/seek - Seek to a position in the currently playing track.</i></summary>
		<p><b>Description:</b>
		<br>
        <i>Seek to the specifed position of the currently playing track. The specifed command option is required. You will provide a position formatted as MM:SS or HH:MM:SS.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/seek position: 0:00</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
    </details>
	
	<details>
        <summary>/autoplay - Enable/Disable autoplay for the audio player.</i></summary>
		<p><b>Description:</b>
		<br>
        <i>Enable/Disable autoplay for the audio player. The specified command option is required. You will provide a true or false value.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/autoplay autoplay: true</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
    </details>
	
	<details>
        <summary>/queue - Show the audio player queue.</i></summary>
		<p><b>Description:</b>
		<br>
        <i>Show a detailed list of all the tracks in the audio player's queue.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/queue</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
    </details>
	
	<details>
        <summary>/stop - Stop the audio player and clear the queue.</i></summary>
		<p><b>Description:</b>
		<br>
        <i>Stop the currently playing track and clear all tracks from the audio player's queue.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/stop</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
    </details>
	
	<details>
        <summary>/volume - Show or set the volume of the audio player. <i>(Requires a premium membership)</i></summary>
        <p><b>Description:</b>
		<br>
		<i>Show the current volume of the audio player, or set it to the specifed value. The reason why this is a premium command is simple. Every Discord user can change the output volume for another user in a voice channel (including bots) for their client side without it affecting other users. This command applies the volume globally for everyone in the voice channel.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/volume</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button>
		<br>
		<i><code>/volume volume: 75</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
    </details>
	
	<details>
        <summary>/gtaradio - Activate GTA Radio. <i>(Requires a premium membership)</i></summary>
		<p><b>Description:</b>
		<br>
        <i>Launch GTA Radio. You will be prompted to select a radio station.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/gtaradio</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
    </details>
	
=== "General"
	  <details>
        <summary>/patreon - Check Patreon status.</summary>
		<p><b>Description:</b>
		<br>
        <i>Check your current membership status and your allowance usage. Omnis refreshs the information from Patreon every 60 seconds.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/patreon</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
      </details>
	  
	  <details>
        <summary>/invite - Invite Omnis to another server.</summary>
		<p><b>Description:</b>
		<br>
        <i>Generate an invite link with the required permissions to add Omnis to another server.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/invite</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
      </details>
	  
	  <details>
        <summary>/install - Install Omnis on your Discord account.</summary>
		<p><b>Description:</b>
		<br>
        <i>Generate an install link with the required scopes to add Omnis to your Discord account.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/install</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
      </details>
	  
	  <details>
       <summary>/help - List all of the available commands.</summary>
	   <p><b>Description:</b>
		<br>
        <i>Provides a categorized list of all available commands for Omnis.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/help</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
      </details>
	  
	  <details>
        <summary>/summon - Summon Omnis to your voice channel.</summary>
		<p><b>Description:</b>
		<br>
        <i>Summon Omnis to your voice channel for any commands that require it.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/summon</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
      </details>
	  
	  <details>
        <summary>/exile - Exile Omnis from your voice channel.</summary>
		<p><b>Description:</b>
		<br>
        <i>Kick Omnis from your voice channel. This command is useful for instances where you don't have the permission to kick people from a voice channel on the Discord server. However, only the user who summoned Omnis to that channel can use this command. This restriction is used to avoid other users from disrupting your experience.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/exile</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
      </details>
	  
	  <details>
        <summary>/wakeup - Wake up Omnis in your voice channel.</summary>
		<p><b>Description:</b>
		<br>
        <i>Wake up Omnis in your voice channel to give it a voice prompt.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/wakeup</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
      </details>
	  
	  <details>
        <summary>/poll - Create a poll.</i></summary>
        <p><b>Description:</b>
		<br>
		<i>Create a poll with the specifed title, options, and duration. The specifed command options are required. Enter all of the answers in one line and seperate with commas. The duration must be between 1 day and 1 week, such as 60m, 2d, 1w, etc. If multiple is set to true, users will be able to select multiple answers.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/poll title: What is the best operating system? options: Windows, Linux, Mac duration: 60m multiple: false</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
      </details>
	  
	  <details>
        <summary>/embed - Create an embed.</i></summary>
        <p><b>Description:</b>
		<br>
		<i>Create an embed with the provided title and description options. The specifed command options are required. If you need to add a new line to either the title or description, use /nl followed by the start of the line. Fun fact: The developer uses this command to create update announcements for Omnis. If footer is enabled, it will include the Omnis logo as an embedded image.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/embed title: New update for Omnis!/nlMassive upgrade to commands! description: - bullet point 1 /nl- bullet point 2 footer: true</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
      </details>
	  
	  <details>
        <summary>/settings - Modify settings. <i>(Requires a premium membership)</i></summary>
		<p><b>Description:</b>
		<br>
        <i>Change your settings to customize things like your Text-to-Speech voice, summon greeting, onWake phrase, and default search engine for music.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/settings</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
      </details>
	  
	  <details>
        <summary>/say - Make Omnis say something. <i>(Requires a premium membership)</i></summary>
        <p><b>Description:</b>
		<br>
		<i>Make Omnis say something in your voice channel using Google's Text-to-Speech. If a phrase is not provided in the command, Omnis will open a modal in order to enter the phrase.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/say</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button>
		<br>
		<i><code>/say phrase: The quick brown fox jumps over the lazy dog</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
      </details>
	  
	  <details>
        <summary>/quiet - Make Omnis stop speaking. <i>(Requires a premium membership)</i></summary>
		<p><b>Description:</b>
		<br>
        <i>Make Omnis stop speaking in your voice channel.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/quiet</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
      </details>
	  
	  <details>
        <summary>/imagine - Create an image from a prompt. <i>(Requires a premium membership)</i></i></summary>
        <p><b>Description:</b>
		<br>
		<i>Generate an image from a prompt using DALL·E. You'll be prompted for options like image size and model. The specifed command options are required. If HD is enabled, only HD image sizes will be selectable and the result will cost more from your allowance.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/imagine prompt: The quick brown fox jumps over the lazy dog hd: true</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
      </details>

	  <details>
        <summary>/talk - Talk to Omnis. <i>(Requires a premium membership)</i></i></summary>
        <p><b>Description:</b>
		<br>
		<i>Send a chat prompt to Omnis. If there is an active conversation in the channel this command is used in, Omnis will use that as a reference for it's response. If the prompt is not provided in the command, Omnis will open a modal in order to enter the prompt. The incognito option is exclusive to this command. When enabled, it will make the response from Omnis an ephemeral message. If TTS is enabled and Omnis is in your voice channel, Omnis will say it's response using Google's Text-to-Speech.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/talk incognito: true tts: true prompt: What's up?</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
      </details>
	  
	  <details>
        <summary>/clear - Clear your conversation with Omnis. <i>(Requires a premium membership)</i></summary>
		<p><b>Description:</b>
		<br>
        <i>Clear the conversation with Omnis in the channel this command is used in if one exists. This will not clear all of your conversations if using multiple channels at once.</i></p>
		<p><b>Usage:</b>
		<br>
		<i><code>/clear</code></i>
		<button class="copy-btn" onclick="copyToClipboard(this)">
			<span>Copy to clipboard</span>
			<img src="../images/copy.png" alt="Copy">
		</button></p>
      </details>
	  
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

### *Available voice commands*

<details>
    <summary>play - Play a track.</summary>
	<p><b>Description:</b>
	<br>
    <i>This command has two ways of using it. <br> <br> 1. "play %s" - Play specifed song. <br> 2. "play %s by %s" - Play specifed song by specifed author. <br> <br> Omnis will search for the track and play the first result.</i></p>
	<p><b>Usage:</b>
	<br>
	<i>play %s%</i>
	<br>
	<i>play %s% by %s%</i>
	<br>
	<i>play darude sandstorm</i>
	<br>
	<i>play crab rave by noisestorm</i></p>
</details>

<details>
    <summary>pause - Pause the audio player.</summary>
	<p><b>Description:</b>
	<br>
    <i>Pause the audio player.</i></p>
	<p><b>Usage:</b>
	<br>
	<i>pause</i></p>
</details>

<details>
    <summary>unpause or resume - Resume the audio player.</summary>
	<p><b>Description:</b>
	<br>
    <i>Resume the audio player.</i></p>
	<p><b>Usage:</b>
	<br>
	<i>unpause</i>
	<br>
	<i>resume</i></p>
</details>

<details>
    <summary>skip - Skip to the next track in the queue.</summary>
	<p><b>Description:</b>
	<br>
    <i>Skip to the next song in the audio player's queue.</i></p>
	<p><b>Usage:</b>
	<br>
	<i>skip</i></p>
</details>

<details>
    <summary>previous - Go back to the previous track in the queue.</summary>
	<p><b>Description:</b>
	<br>
    <i>Go back to the previous track in the audio player's queue.</i></p>
	<p><b>Usage:</b>
	<br>
	<i>previous</i></p>
</details>

<details>
    <summary>stop - Stop the audio player.</summary>
	<p><b>Description:</b>
	<br>
    <i>Stop the audio player and clear the queue.</i></p>
	<p><b>Usage:</b>
	<br>
	<i>stop</i></p>
</details>

<details>
    <summary>volume - Set the volume of the audio player. <i>(Requires a premium membership)</i></summary>
	<p><b>Description:</b>
	<br>
    <i>This command has two ways of using it: <br> <br> 1. "volume %i" - Set the volume of the audio player to the specifed number. <br> 2. "volume up or down" - Set the volume of the audio player up/down by 10.</i></p>
	<p><b>Usage:</b>
	<br>
	<i>volume %i%</i>
	<br>
	<i>volume up</i>
	<br>
	<i>volume down</i>
	<br>
	<i>volume 75</i></p>
</details>

<details>
    <summary>gta radio - Activate GTA Radio. <i>(Requires a premium membership)</i></summary>
	<p><b>Description:</b>
	<br>
    <i>Activate GTA Radio with the specified station.</i></p>
	<p><b>Usage:</b>
	<br>
	<i>gta radio %s%</i>
	<br>
	<i>gta radio radio los santos</i>
	<br>
	<i>gta radio los santos rock radio</i></p>
</details>

<br>

!!! info "Voice chat prompts and auto-wake for user response (Premium)"
    For premium users, any other voice prompts are treated as chat prompts and Omnis will respond using OpenAI and Google's Text-to-Speech. When talking with Omnis in a voice channel, if Omnis responds with a question, it will automatically wake up and listen for your input.