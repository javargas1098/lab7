/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.cinema.persistence;

/**
 *
 * @author cristian
 */
public class CinemaException extends Exception{

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public CinemaException(String message) {
        super(message);
    }

    public CinemaException(String message, Throwable cause) {
        super(message, cause);
    }
    
}
