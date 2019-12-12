$.ajax({
	type: 'get',
	url: 'http://localhost:8000/admin/comment_search',
	success: function (response) {
		console.log(response)
	}
})