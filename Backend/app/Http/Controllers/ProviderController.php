<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Exception;
use App\Models\Provider;
use DB;
use Lang;

class ProviderController extends Controller
{
    private $picture_display_path;
    private $picture_upload_path;


    public function __construct(){
        $this->picture_display_path = config('app.app_root').config('app.img_path.picture');
        $this->picture_upload_path = public_path('images');
    }

    /**
     * @OA\Get(
     *     path="/api/get_providers",
     *     @OA\Response(response="200",description="Display a listing of providers.")
     * )
     *
     * Display a listing of the providers.
     *
     * @return \Illuminate\Http\Response
    */
    public function index(Request $request){
    	try{
           
            $query = DB::table('providers');
    	
        	if(!empty($request->by_text)){
        		$text = $request->by_text;
               
        		$query->where(
                        function ($q) use ($text) {
                            $q->where('providers.name', 'like', "%$text%")
                              ->orwhere('providers.price', 'like', "%$text%")
                              ->orwhere('providers.rating', 'like', "%$text%");
                        }
                    );
        	}

    	
    	$otherData['image_path'] = $this->picture_display_path;

        if(isset($request->rows) || isset($request->first)){
             $resultSet = $query->orderBy('id', 'desc')
                ->take($request->rows)
                ->skip($request->first)
                ->get();
            $otherData['result_set_count'] = $resultSet->count();
            }else{
                 $resultSet = $query->orderBy('id', 'desc')->get();
            }

              return $this->sendResponse($resultSet,Lang::get('messages.provider_display'),$otherData);

        }catch(Exception $ex){

    	 return $this->sendError($ex->getMessage(),'on line : '.$ex->getLine().' on file : '.$ex->getFile());
    	}
    	
    }

    
    /**
     * @OA\Get(
     *     path="/api/get_provider_detail/{id}",
     *     @OA\Response(response="200",description="Display a Provider Detail.")
     * )
     *
     * Display Provider Detail.
     *
     * @return \Illuminate\Http\Response
    */
    public function show($id)
    {
        try {
            $resultSet = Provider::where('id',$id)->first();

            if (is_null($resultSet)) {
                return $this->sendError(array(),Lang::get('messages.provider_not_found'));
            }

            $otherData['image_path'] = $this->picture_display_path;

            return $this->sendResponse($resultSet,Lang::get('messages.provider_detail_display'),$otherData);

        } catch (\Exception $ex) {
            return $this->sendError($ex->getMessage(),'on line : '.$ex->getLine().' on file : '.$ex->getFile());
        }
    }

}
