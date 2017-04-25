//sync
//process.stdin.pipe(process.stdout);

//async
process.stdin.on('data',function(data){
	process.stdout.write(data);
})