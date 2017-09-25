

	// if ( ! function_exists( 'getFormatDate' ) )
	// {
	// 	function getFormatDate( $date, $is_full = true, $is_with_time = false, $is_with_days = false)
	// 	{
    //        if( $is_with_time )
    //            return date( 'F d, Y g:i A', strtotime( $date ) );
	// 		if( $is_full )
	// 			return date( 'F d, Y', strtotime( $date ) );
	// 		if( $is_with_days )
	// 			return date( 'l F d, Y', strtotime( $date ) );
	// 		else return date( 'M d, Y', strtotime( $date ) );
	// 	}
	// }

    // if ( ! function_exists('formatNumber'))
	// {
	// 	function formatNumber( $price, $with_decimal = true, $count = 2 )
	// 	{
	// 		$formattedNumber = ( $with_decimal ) ? number_format( $price, $count, '.', ',' ) : number_format( $price, 0, '', ',' );
	// 		return $formattedNumber;
	// 	}
	// }

	// if ( ! function_exists( 'moneyFormat' ) )
	// {
	// 	function moneyFormat( $number, $comma = true )
	// 	{
	// 		$seperator 	= $comma == true ? "," : "";
	// 		$rounded 	= round( $number, 2 );
	// 		return number_format( (float)$rounded, 2, '.', $seperator );
	// 	}
	// }

	// if( ! function_exists( 'prepareFlashData' ) )
	// {
	// 	function prepareFlashData( $message, $is_success = TRUE ) //, $forFront = FALSE, $isOverride = FALSE )
	// 	{
	// 		if( $isOverride )
	// 			$class = ( $isSuccess ) ? 'flash-success2' : 'flash-error';
	// 		else
	// 			$class = ( $isSuccess ) ? 'flash-success' : 'flash-error';

	// 		$divClass = ( $forFront ) ? 'w3-row' : 'one_col';

	// 		return '<div class="'.$divClass.'"><div class="'.$class.'">'.$message.'</div></div>';
	// 	}
	// }