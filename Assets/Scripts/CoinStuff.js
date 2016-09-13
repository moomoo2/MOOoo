#pragma strict

public var points : int = 5; //we have a variable points equal to 5
public var pickedUpBy : String = "Player"; //we have variable pickedUpBy equal to player

function OnTriggerEnter2D(other : Collider2D)// in this function our parameter is other it si of type Collider2D
{
	if ( other.CompareTag(pickedUpBy) )
	{
		Debug.Log("WOW! Worth " + points + " points!");

		Destroy(gameObject);

	}
}
