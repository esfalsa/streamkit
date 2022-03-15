<script>
	let name = '';
	let organization = false;
	let image;

	let bio = '';

	let message = '';
	let hashtags = '';

	let approvals = '';

	let copyLabel = 'Copy';
	let copyDisabled = false;

	function formatApprovals(approvals) {
		if (approvals >= 1000) {
			return `${(approvals / 1000).toFixed(1)}k`;
		}
		return approvals;
	}

	function copyBBCode() {
		navigator.clipboard.writeText(document.querySelector('#bbcode').value).then(() => {
			console.log('2');
			copyLabel = 'Copied!';
			setTimeout(() => {
				copyLabel = 'Copy';
			}, 1000);
		});
		// navigator.clipboard.writeText('<empty clipboard>').then(() => {});
	}
</script>

<h1 class="font-extrabold text-4xl tracking-tight mb-4">
	<svg
		class="w-8 h-8 inline -mt-2"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
		/></svg
	> StreamKit
</h1>

<div class="flex space-x-6">
	<section class="flex-1 space-y-3">
		<div class="flex flex-col md:flex-row flex-wrap space-y-3 md:space-y-0 md:space-x-3">
			<div class="flex-1">
				<label for="name">Name</label>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Poley Tishan"
					bind:value={name}
					class="input w-full"
				/>
			</div>

			<div class="flex-2">
				<label for="bio">Bio</label>
				<input
					type="text"
					name="bio"
					id="bio"
					bind:value={bio}
					placeholder="Party leader of the Purple Party"
					class="input w-full"
				/>
			</div>
		</div>

		<div>
			<label for="organization" class="flex-none">
				<input
					type="checkbox"
					name="organization"
					id="organization"
					bind:value={organization}
					class="input"
				/>
				Organization
			</label>
		</div>

		<div />

		<div>
			<label for="image">Profile Image</label>
			<input
				type="text"
				name="image"
				id="image"
				placeholder="https://i.imgur.com/yjaEcla.jpg"
				bind:value={image}
				class="input w-full"
			/>
		</div>

		<div>
			<label for="message">Message</label>
			<textarea
				name="message"
				id="message"
				rows="3"
				bind:value={message}
				class="input w-full"
				placeholder="PM boasts that our GDP has increased thanks to Carbon Valley. But what about pollution? In total, carbon emissions have increased by 7% and continues to do so. Close it down now!"
			/>
		</div>

		<div>
			<label for="hashtags">Hashtags</label>
			<input
				type="text"
				name="hashtags"
				id="hashtags"
				bind:value={hashtags}
				class="input w-full"
				placeholder="#Elect16, #PurpleParty, #ZeroEmissions"
			/>
		</div>

		<div>
			<label for="approvals">Approvals</label>
			<input
				type="number"
				name="approvals"
				id="approvals"
				bind:value={approvals}
				min="1"
				step="1"
				class="input"
				placeholder="2500"
			/>
			<p class="text-gray-600 text-sm">Just enter a number. We'll format it for you.</p>
		</div>
	</section>
	<section class="flex-1">
		<h3 class="font-extrabold text-3xl mb-1">Preview</h3>
		<div class="border border-gray-200 rounded-md p-1.5 bg-white shadow">
			<table class="w-full">
				<tbody
					><tr
						><td class="align-middle text-center"
							><div class="float-left">
								<img
									src={image ? image : 'https://fakeimg.pl/90/?text=Placeholder'}
									alt={name ? name : '[name]'}
								/>
							</div>
							<span class="font-[Arial] text-green-stream font-bold text-[x-large]"
								>{name ? name : '[name]'}</span
							><br />
							<span class="text-gray-stream text-[small]">
								<p class="text-blue-500">
									<img src="https://tspforums.xyz/images/collapse.png" alt="[-]" class="inline" />
									{organization ? 'Who are we?' : 'Who am I?'}
								</p>
								{bio ? bio : '[bio]'}
							</span></td
						></tr
					>
					<tr
						><td class="trow1">
							<div style="text-align: left;" class="mycode_align">
								<span style="font-size: medium;" class="mycode_size"
									>{message ? message : '[message]'}</span
								>
							</div>
							&nbsp;<br />
							<div class="text-blue-stream text-sm">{hashtags ? hashtags : '[hashtags]'}</div>
							&nbsp;<br />
							<div style="text-align: right;" class="mycode_align">
								<span style="color: #339933;" class="mycode_color"
									>{approvals ? formatApprovals(approvals) : '[approvals]'}</span
								>
								<a
									href="https://tspforums.xyz/thread-2900-lastpost.html"
									target="_blank"
									rel="noopener"
									class="mycode_url"
									><img
										src="https://i.imgur.com/RETkk1n.png"
										loading="lazy"
										width="23"
										height="21"
										alt="approvals"
										class="inline"
									/> <span style="color: #339933;">Comment</span></a
								>
							</div>
						</td></tr
					></tbody
				>
			</table>
		</div>

		<h3 class="font-extrabold text-3xl mt-3 mb-1">BBCode</h3>
		<!-- prettier-ignore -->
		<textarea name="bbcode" id="bbcode" class="input w-full h-32 mb-3" disabled
			>[table=70][tr][td][float=left][img]{image ? image : 'https://fakeimg.pl/90/?text=Placeholder'}[/img][/float][size=x-large][b][color=#339933][font=arial]{name ? name : '[name]'}[/font][/color][/b][/size]
        [color=#7f8c8d][size=small][spoiler={organization ? 'Who are we?' : 'Who am I?'}]{bio ? bio : '[bio]'}[/spoiler][/size][/color][/td][/tr]
        [tr][td]
        [align=left][size=medium]{message ? message : '[message]'}[/size][/align]
        
        [align=left][color=#0000ff]{hashtags ? hashtags : '[hashtags]'}[/color][/align]
        
        [align=right][color=#339933]{approvals ? formatApprovals(approvals) : '[approvals]'}[/color]  [url=https://tspforums.xyz/thread-2900-lastpost.html][img=23x21]https://i.imgur.com/RETkk1n.png[/img]  [color=#339933]Comment[/color][/url][/align]
        [/td][/tr][/table]</textarea
		>
		<button
			class="block px-3 py-1.5 font-medium tracking-wide text-white transition bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
			on:click={copyBBCode}
		>
			{copyLabel}
		</button>
	</section>
</div>
