import {CHANGE_SEARCH_FIELD,
		REQUEST_ROBOT_PENDING,
		REQUEST_ROBOT_SUCCESS,
		REQUEST_ROBOT_FAILED,
		} from './constant';

const initialState={
	searchfield:''
}  

export const searchRobots=(state=initialState,action={})=>
{
	switch (action.type)
	{
		case CHANGE_SEARCH_FIELD:
			return Object.assign({},state,{searchfield:action.payload});
		default : return state;
	}
}

const initialstate2=
{	
	isPending:true,
	robots:[],
	error:''
}
export const requestRobots=(state=initialstate2,action={})=>
{
	switch(action.type){
		case REQUEST_ROBOT_PENDING:
			return Object.assign({},state,{isPending:true});
		case REQUEST_ROBOT_SUCCESS:
			return Object.assign({},state,{robots: action.payload, isPending:false});
		case REQUEST_ROBOT_FAILED:
			return Object.assign({},state,{error:action.payload, isPending:true});
		default : return state;
	}
}
