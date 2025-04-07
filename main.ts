imports.gi.versions.Gtk = "4.0";
const { Gtk }= imports.gi;



class AppPlanner extends Gtk.ApplicationWindow{
    private static app = new Gtk.Application({ application_id : 'org.gtk.AppPlanner' });
    private constructor(){
	super(AppPlanner.app);
    }
    init(){
	const header = new Gtk.HeaderBar();
	
    }

    static run(){
	const app : AppPlanner = new AppPlanner();
	app.init();
    }
}
