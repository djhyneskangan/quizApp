<script>
	export let data;
	console.log(data);
	let currentQuestionIndex = 0;
	let selectedAnswerIndex = -1;
	let correctAnswers = 0;
	let totalQuestions = data.questions.length;

	function goToNextQuestion() {
		if (currentQuestionIndex < data.questions.length - 1) {
			currentQuestionIndex++;
			selectedAnswerIndex = -1;
		}
	}

	function goToPreviousQuestion() {
		if (currentQuestionIndex > 0) {
			currentQuestionIndex--;
			selectedAnswerIndex = -1;
		}
	}

	// @ts-ignore
	function selectAnswer(index) {
		selectedAnswerIndex = index;
		const currentQuestion = data.questions[currentQuestionIndex];
		if (index === currentQuestion.correctIndex) {
			correctAnswers++;
		}
	}

	function resetQuiz() {
		currentQuestionIndex = 0;
		selectedAnswerIndex = -1;
		correctAnswers = 0;
	}
</script>

<body class="flex flex-col w-screen px-5 h-screen bg-[#1A1A1A] items-center">
	<h1 class="pt-10 text-2xl text-slate-300">The Code Master Quiz</h1>

	<h4 class="mt-10 text-xl text-white/60">
		Question {currentQuestionIndex + 1} of {data.questions.length}
	</h4>

	<div class="mt-4 text-2xl text-white">
		{data.questions[currentQuestionIndex]?.question}
	</div>

	<div class="grid grid-cols-2 gap-4 py-5">
		{#each data.questions[currentQuestionIndex]?.answers as answer, index}
			<button
				class="bg-[#bae6fd]/80 py-4 px-6 rounded {index === selectedAnswerIndex
					? 'selected-answer'
					: ''}"
				on:click={() => selectAnswer(index)}
			>
				{answer}
			</button>
		{/each}
	</div>

	<div class="grid grid-rows-1 grid-cols-2 gap-4">
		<button class="bg-[#bae6fd]/80 py-4 px-6 rounded mt-4" on:click={goToPreviousQuestion}>
			Previous Question
		</button>

		<button class="bg-[#bae6fd]/80 py-4 px-6 rounded mt-4" on:click={goToNextQuestion}>
			Next Question
		</button>
	</div>

	<!-- Add a condition to display the final score only after the last question -->
	{#if currentQuestionIndex === totalQuestions - 1}
		{#if selectedAnswerIndex !== -1}
			<div class="mt-4 text-2xl text-white">
				{#if correctAnswers === totalQuestions}
					<!-- Display a success message if all answers are correct -->
					<p>Congratulations! You answered all questions correctly!</p>
				{:else}
					<!-- Display the final score if not all answers are correct -->
					<p>Your final score:</p>
					<p>{correctAnswers} out of {totalQuestions}</p>
				{/if}
				<button class="bg-[#bae6fd]/80 py-4 px-6 rounded mt-4 text-black" on:click={resetQuiz}>
					Restart Quiz
				</button>
			</div>
		{/if}
	{/if}

	<style>
		.selected-answer {
			background-color: #003366; /* Change this to the desired darker blue color */
			color: white;
		}
	</style>
</body>
