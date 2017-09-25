<?php
        defined('BASEPATH') OR exit('No direct script access allowed');

        class MY_Output extends CI_Output
        {

        	public function json($output, $http_code = 200)
        	{
                        if (!is_array($output) && !is_object($output)) {

                        	trigger_error('NX_Output::json() expects parameter 1 to be an array or an object, ' .gettype($output). " given.", E_USER_WARNING);
                        	return $this;
                        }

                        if (($output = json_encode($output)) === FALSE) {

                        	trigger_error('NX_Output::json() unable to encode parameter 1', E_USER_WARNING);
                        	return $this;
                        }

                        if (!is_int($http_code)) {

                        	trigger_error('NX_Output::json() expects parameter 2 to be an integer, ' .gettype($http_code). ' given.', E_USER_WARNING);
                        	return $this;
                        }

                        return $this->set_content_type('application/json')
                        			->set_status_header($http_code)
                        			->set_output($output);
        	}

                public function html( $output, $http_code = 200 ) {
                {
                        if ( ! is_array( $output ) && !is_object( $output ) )
                        {
                                trigger_error( __METHOD__.' expects parameter 1 to be an array or an object, ' . gettype( $output ). " given.", E_USER_WARNING );
                                return $this;
                        }

                        if ( ( $output = json_encode( $output ) ) === FALSE )
                        {
                                trigger_error( __METHOD__.' unable to encode parameter 1', E_USER_WARNING );
                                return $this;
                        }

                        if (!is_int($http_code))

                                trigger_error( __METHOD__.' expects parameter 2 to be an integer, ' . gettype( $http_code ) . ' given.', E_USER_WARNING );
                                return $this;
                        }

                        return $this->set_content_type( 'application/html' )
                                        ->set_status_header( $http_code )
                                        ->set_output( $output );
                }
        }

/* End of file NX_Output.php */
/* Location: ./application/core/NX_Output.php */
