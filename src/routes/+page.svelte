<script>
	export let data;
	console.log(data);
</script>

<body class="flex flex-col w-screen px-5 h-screen bg-[#1A1A1A] items-center">
	<h1 class="pt-10 text-2xl text-slate-300">The Code Master Quiz</h1>

	<h4 class="mt-10 text-xl text-white/60">Question 1 of 5</h4>
	<div class="mt-4 text-2xl text-white">
		{#each data.questions as question}
			{question.question}
		{/each}
	</div>

	<div class="grid grid-cols-2 gap-4 py-5">
		{#each data.questions as question}
			<button class="bg-[#bae6fd]/80 py-4 px-6 rounded">{question.answers[0]}</button>
			<button class="bg-[#bae6fd]/80 py-4 px-6 rounded">{question.answers[1]}</button>
			<button class="bg-[#bae6fd]/80 py-4 px-6 rounded">{question.answers[2]}</button>
			<button class="bg-[#bae6fd]/80 py-4 px-6 rounded">{question.answers[3]}</button>
		{/each}
	</div>
</body>
