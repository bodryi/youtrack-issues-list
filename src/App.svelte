<script>
	import { onMount } from 'svelte';
	import TaskList from './components/TaskList.svelte';
	import SearchInput from './components/SearchInput.svelte';

	export let youtrackUrl;

	let tasks = [];

	onMount(() => {
		handleSearch('');
	});

	const jsonHeaders = () => {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return headers;
	};

	const handleSearch = ({detail: query}) => fetch(`
		${youtrackUrl}/api/issues?fields=idReadable,created,summary,resolved${query ? `&query=${query}` : ''}
	`, {
		method: 'GET',
		headers: jsonHeaders(),
	})
			.then(response => response.json())
			.then(response => tasks = response)
			.catch()
</script>

<SearchInput on:search={handleSearch}></SearchInput>
<TaskList list={tasks}></TaskList>

