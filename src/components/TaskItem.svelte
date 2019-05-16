<script>
	export let task;
</script>

<style>
	td {
		border-left: 1px solid lightcoral;
		border-bottom: 1px solid lightcoral;
		padding: 10px 15px;
	}

	td:last-child {
		border-right: 1px solid lightcoral;
	}
</style>

<tr>
	<td class="cell">{task.idReadable}</td>
	<td class="cell">{task.summary}</td>
	<td class="cell">{new Date(task.created).toLocaleDateString()}</td>
	<td class="cell"><input type="checkbox" checked={task.resolved} disabled/></td>
</tr>
