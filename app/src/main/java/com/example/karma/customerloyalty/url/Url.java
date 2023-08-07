package com.example.karma.customerloyalty.url;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class Url {

    //home ip
    public static final String base_url = "http://192.168.1.67:3000/";

     //emulator ip
//    public static final String base_url = "http://10.0.2.2:3000/";


   // public static final String base_url = "http://172.100.100.5:3000/";

    //college ip
   // public static final String base_url = "http://192.168.0.106:3000/";
    //  public static final String base_url = "http://10.0.2.2:3000/";
    public static String token = "Bearer ";
    public static String imagePath = base_url + "uploads/" ;
    public static String Cookie="";
    public static Retrofit getInstance() {
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(base_url)
                .addConverterFactory(GsonConverterFactory.create())
                .build();
        return retrofit;
    }
}