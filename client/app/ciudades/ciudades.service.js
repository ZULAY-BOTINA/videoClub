'use strict';

function ciudadesService($resource,API) {
	return $resource(API+"/api/ciudades/:id",{
		id:'@id'
	},{
		update:{
			method:'PUT'
		}
				
	})
}

angular.module('videoClubApp')
  .factory('ciudadesService', ciudadesService);
