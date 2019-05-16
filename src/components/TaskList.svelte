<script>
	import TaskItem from './TaskItem.svelte';

	export let list;
</script>

<style>
	table {
		border-spacing: 0;
		margin: 10px 0;
	}

	td {
		border-left: 1px solid lightcoral;
		border-top: 1px solid lightcoral;
		border-bottom: 1px solid lightcoral;
		padding: 10px 15px;
	}

	td:last-child {
		border-right: 1px solid lightcoral;
	}
</style>

<table>
	<thead>
		<td>Task ID</td>
		<td>Summary</td>
		<td>Created</td>
		<td>Resolved</td>
	</thead>
	<tbody>
		{#each list as item}
			<TaskItem task={item}></TaskItem>
		{/each}
	</tbody>
</table>
