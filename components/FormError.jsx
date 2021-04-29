import React from 'react';
import { ErrorMessage } from 'formik';

const FormError = ({ name }) => {
	return(
		<ErrorMessage name={name}>
			{
				(error) => {
					return(
						<div className="flex justify-center items-center">
							<p className="text-xs font-red-100">
								{error}
							</p>
						</div>
					)
				}
			}
		</ErrorMessage>
	)
}

export default FormError;