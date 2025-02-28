class EventEmitter {
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    event_map ;
    constructor(){
        this.event_map = {} ;
    }
    subscribe(eventName, callback) {
        if(!Array.isArray(this.event_map[eventName])){
            this.event_map[eventName] = [] ;
        }
        this.event_map[eventName].push(callback) ;
        return {
            unsubscribe: () => {
                this.event_map[eventName] = this.event_map[eventName].filter(x => x != callback) ;
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        let res = [] ;
        if(!this.event_map[eventName]?.length) return res ;
        for(let i = 0 ; i < this.event_map[eventName].length ; i++){
            res.push(this.event_map[eventName][i].apply(null,args)) ;
        }
        return res ;
    }
}

