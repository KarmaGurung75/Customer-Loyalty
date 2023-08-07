package com.example.karma.customerloyalty.ui.slideshow;

import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.ViewModelProviders;

import com.example.karma.customerloyalty.R;
import com.example.karma.customerloyalty.activity.PurchaseActivity;
import com.example.karma.customerloyalty.activity.SearchPurchaseActivity;

public class SlideshowFragment extends Fragment {

    private SlideshowViewModel slideshowViewModel;
    private Button btnAddPurchase, btnSearchPurchase;


    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {
        slideshowViewModel =
                ViewModelProviders.of(this).get(SlideshowViewModel.class);
        View root = inflater.inflate(R.layout.fragment_slideshow, container, false);
//        final TextView textView = root.findViewById(R.id.text_slideshow);
//        slideshowViewModel.getText().observe(this, new Observer<String>() {
//            @Override
//            public void onChanged(@Nullable String s) {
//                textView.setText(s);
//            }
//        });

        btnAddPurchase = root.findViewById(R.id.btnAddPurchase);
        btnSearchPurchase = root.findViewById(R.id.btnSearchPurchase);

        btnAddPurchase.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getContext(), PurchaseActivity.class);
                startActivity(intent);

            }
        });

        btnSearchPurchase.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent1 = new Intent(getContext(), SearchPurchaseActivity.class);
                startActivity(intent1);
            }
        });
        return root;
    }
}