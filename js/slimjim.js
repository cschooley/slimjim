function sj_load(){
	var filename;
	var slug = window.location.hash.substr(1);
	//var markdowntext;
	console.log("Using slug: ", slug);
	
	var docSlugRegex = /^[A-Zza-z_0-9/]+.md$/g
	var dirSlugRegex = /^[A-Zza-z_0-9/]+$/g
	var docSlugMatch = docSlugRegex.exec(slug);	
	var dirSlugMatch = dirSlugRegex.exec(slug);


	if (slug === "" ) {
		console.log("No slug, setting index.md");
		filename = 'index.md';
	}
	else if (docSlugMatch != null)
	{
		filename = slug;
		console.log(".md document specified: "+filename);
	}
	else if (dirSlugMatch != null)
	{
		filename = slug+'/index.md';
		console.log("directory specified: "+filename);
	}
	else
	{
		filename = 'sys/400.md'
		console.log("Slug format error.");
	}

	$.get(filename, function(data) {
		
		var titleRegex = /^title:.*/gi
		var titleMatch = titleRegex.exec(data)

		if (titleMatch != null)
		{
			document.title = titleMatch[0].split(/:\s*/)[1]
			data = data.replace(titleRegex, '')
		}
		
		$("#markdown").html(markdown.toHTML(data));
	})
		.fail(function() { window.location.hash = 'sys/404.md'; /*location.reload()*/});
};




