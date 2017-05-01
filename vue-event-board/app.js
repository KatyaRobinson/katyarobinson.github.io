
new Vue({
	el: '#events',
	data: {
		event: {name:'', description: '', date: ''},
		events: []
	},
	mounted: function(){
		this.fetchEvents();
	},
	methods: {
		fetchEvents: function(){
			var events = [
				{
					id: 1,
					name: 'Birthday Party',
					description: 'Welcome to the birthday party',
					date: '2017-04-21'
				},
				{
					id: 2,
					name: 'Firefly',
					description: 'Annual Firefly music festival in Dover, DE',
					date: '2017-06-18'
				},
				{
					id: 3,
					name: 'Hamilton',
					description: 'Famous play coming to Philadelphia!',
					date: '2018-02-14'
				}

			];

			this.events = events;
		},

		addEvent: function(){
			if(this.event.name){
				this.events.push(this.event);
				this.event = {name: '', description: '', date: ''};
			}
		},
		deleteEvent: function(index){
			if(confirm("Are you sure you want to delete this event?")){
				this.events.splice(index, 1);
			}
		}
	}
});

